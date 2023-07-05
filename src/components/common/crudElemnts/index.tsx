import { Alert, Button, Card, Row, Typography } from 'antd';
import Fuse from 'fuse.js';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import styles from '@/components/common/businessUnitsComponents/businessUnits/BusinessUnits.module.scss';
import * as Cell from '@/components/common/crudElemnts/Cell';
import classStyle from '@/components/common/input/input.module.scss';
import tableStyles from '@/components/common/tableComponent/Table.module.scss';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useDebounce from '@/components/hooks/useDebounce';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';
import childrenByType from '@/utils/childrenByType';

import { subscribe, unsubscribe } from './Events';
import type { IList, LayoutSubComponentProps } from './types';

const { Title } = Typography;

export const List: FC<IList> & {
  Actions: FC<LayoutSubComponentProps>;
  Search: FC<LayoutSubComponentProps>;
  Body: FC<LayoutSubComponentProps>;
} = ({
  data,
  error,
  mutate,
  isValidating,
  isLoading,
  columns,
  texts,
  children,
  config = {},
  expandedRowRender,
  defaultRowSelectOptions,
}) => {
  const {
    creatable = true,
    searchable = true,
    keysToSearchBy = [],
    paginationOptions = {},
  } = config;
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);
  const { pathname } = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [debouncedValue, setDebouncedValue] = useDebounce<string>(
    searchTerm,
    300
  );

  const { width = 0 } = useWindowDimensions();

  const showLoading = isLoading || isValidating;

  useEffect(() => {
    subscribe('showError', (e) => {
      // @ts-ignore
      setErrorMessage(e.detail);
    });
    return () => {
      unsubscribe('showError', () => setErrorMessage(null));
    };
  }, []);

  useEffect(() => {
    setSearchTerm('');
    setDebouncedValue('');
    if (!showLoading) {
      mutate();
    }
  }, [currentUserRoleName]);

  const filteredData = useMemo(() => {
    if (showLoading || error || !data) return null;

    const fuse = new Fuse(data, { keys: keysToSearchBy });
    return fuse.search(debouncedValue).map((r: any) => r.item);
  }, [data, showLoading, debouncedValue]);

  if (error) return <Cell.Failure />;

  const searchChildren = childrenByType(children, List.Search);
  const actionChildren = childrenByType(children, List.Actions);
  const bodyChildren = childrenByType(children, List.Body);

  return (
    <>
      <div className={styles.business_units}>
        <Title level={4} className={styles.business_units__buyer}>
          {currentUserRoleName}
        </Title>
        <Title level={2} className={styles.business_units__title}>
          {texts.titleTable}
        </Title>
        <Row className={styles.buttons_and_search}>
          <div className={styles.search}>
            {searchable && (
              <div className={classStyle.input}>
                <input
                  value={searchTerm}
                  type="text"
                  id="search"
                  className={classStyle.input__login}
                  style={{
                    width: width <= TABLET_BREAKPOINT ? '100%' : '273px',
                    height: '43px',
                    backgroundColor: 'transparent',
                  }}
                  placeholder="Search by"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className={classStyle.input__show_pass}>
                  <Image
                    width={20}
                    height={20}
                    alt="search"
                    src={'/assets/icons/search.svg'}
                  />
                </span>
              </div>
            )}
            {searchChildren}
          </div>
          <div className={styles.buttons}>
            {actionChildren}

            {creatable && (
              <Link href={`${pathname}/create`} passHref legacyBehavior>
                <Button type="primary" size="large">
                  <AiOutlinePlus className={styles.buttons__add_icon} />
                  {texts.buttonAddNew}
                </Button>
              </Link>
            )}
          </div>
        </Row>
        <Card className={tableStyles.card} bodyStyle={{ padding: '32px 48px' }}>
          {bodyChildren}
          <Card.Grid hoverable={false} className={tableStyles.grid}>
            {errorMessage && (
              <Alert
                showIcon
                closable
                type="error"
                message={errorMessage}
                className={`alert_red ${styles.alert}`}
                afterClose={() => setErrorMessage(null)}
                icon={
                  <Image
                    src="/assets/icons/alert_error.svg"
                    alt="logo_conexis"
                    width={24}
                    height={24}
                  />
                }
              />
            )}
            <Cell.Success
              {...{
                data: debouncedValue === '' ? data : filteredData,
                columns,
                paginationOptions,
                expandedRowRender,
                defaultRowSelectOptions,
              }}
            />
          </Card.Grid>
        </Card>
      </div>
    </>
  );
};
const SearchContainer: FC<LayoutSubComponentProps> = ({ children }) => {
  return children;
};

const ActionsContainer: FC<LayoutSubComponentProps> = ({ children }) => {
  return children;
};

const BodyContainer: React.FC<LayoutSubComponentProps> = ({ children }) => {
  return <>{children}</>;
};

List.Search = SearchContainer;
List.Actions = ActionsContainer;
List.Body = BodyContainer;
