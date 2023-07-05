import { Button, Row, Typography } from 'antd';
import router from 'next/router';
import type { FC } from 'react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Input from '@/components/common/input/Input';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { urls } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';
import locales from '@/locales/en/en.json';

import useRenderTitleLoggedAs from '../../../hooks/useRenderTitleLoggedAs';
import ModalEditWorker from '../modalEditWorker/ModalEditWorker';
import TableCandidates from '../tableCandidates/TableCandidates';
import styles from './candidates.module.scss';
import type { ICandidates } from './ICandidates';

const { candidates } = locales;

const Candidates: FC<ICandidates.IProps> = ({
  allCandidates,
  filteredData,
  handleSearch,
  infoCandidate,
  loading,
  searchText,
}: ICandidates.IProps) => {
  const { width = 0 } = useWindowDimensions();
  const { renderTitleLoggedAs } = useRenderTitleLoggedAs();

  return (
    <>
      <ModalEditWorker key={infoCandidate?.workerStatus} />
      <div className={styles.candidates}>
        <Typography.Title className={styles.candidates__buyer}>
          {renderTitleLoggedAs}
        </Typography.Title>
        <Typography.Title className={styles.candidates__title}>
          {candidates.title}
        </Typography.Title>
        <Row className={styles.buttons_and_search}>
          <div className={styles.search}>
            <Input
              id="search"
              type="text"
              icon="search"
              isLabel={false}
              inputHeight="43px"
              register={() => {}}
              placeholder={candidates.placeholderSearch}
              inputBackground="transparent"
              inputWidth={width <= TABLET_BREAKPOINT ? '100%' : '273px'}
              onChange={(value: string) => handleSearch(value)}
            />
          </div>
          <div className={styles.buttons}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => router.push(urls.URL_CREATE_CANDIDATE)}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              {candidates.buttonAdd}
            </Button>
          </div>
        </Row>
        <TableCandidates
          loading={loading}
          dataUser={allCandidates}
          filteredData={filteredData}
          searchText={searchText}
        />
      </div>
    </>
  );
};

export default Candidates;
