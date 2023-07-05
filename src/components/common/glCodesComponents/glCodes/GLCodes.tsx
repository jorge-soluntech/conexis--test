import { Button, Row, Typography } from 'antd';
import router from 'next/router';
import type { FC } from 'react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Input from '@/components/common/input/Input';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import TableGLCodes from '../tableGLCodes/TableGLCodes';
import styles from './GLCodes.module.scss';
import type { IGLCodes } from './IGLCodes';

const { Title } = Typography;

const GLCodes: FC<IGLCodes.IProps> = ({
  dataGLCodes,
  filteredData,
  handleSearchChange,
  loading,
  setDataGLCodes,
  setFilteredData,
  searchText,
}: IGLCodes.IProps) => {
  const { width = 0 } = useWindowDimensions();
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  return (
    <>
      <div className={styles.gl_codes}>
        <Title level={4} className={styles.gl_codes__buyer}>
          {currentUserRoleName}
        </Title>
        <Title level={2} className={styles.gl_codes__title}>
          Manage GL Codes
        </Title>
        <Row className={styles.buttons_and_search}>
          <div className={styles.search}>
            <Input
              id="search"
              type="text"
              icon="search"
              isLabel={false}
              inputHeight="43px"
              register={() => {}}
              placeholder="Search by"
              inputBackground="transparent"
              inputWidth={width <= TABLET_BREAKPOINT ? '100%' : '273px'}
              onChange={(value: string) => handleSearchChange(value)}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => {
                router.push('/home/gl-codes/create');
              }}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              Add GL code
            </Button>
          </div>
        </Row>
        <TableGLCodes
          searchText={searchText}
          loading={loading}
          dataGLCodes={dataGLCodes}
          setDataGLCodes={setDataGLCodes}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </div>
    </>
  );
};

export default GLCodes;
