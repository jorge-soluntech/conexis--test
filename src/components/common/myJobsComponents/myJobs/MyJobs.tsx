import { Button, Row, Typography } from 'antd';
import type { FC } from 'react';

import Input from '@/components/common/input/Input';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';
import locales from '@/locales/en/en.json';

import ExportDropdown from '../../exportDropdownComponent/ExportDropdownComponent';
import CancelJobModal from '../cancelJobModal/CancelJobModal';
import DuplicateJobModal from '../duplicateJobModal/DuplicateJobModal';
import FillJobModal from '../fillJobModal/FillJobModal';
import TableMyJobs from '../tableMyJobs/TableMyJobs';
import { TemplateJobsModal } from '../templateJobsModal/TemplateJobsModal';
import { UpdateStatusJobModal } from '../updateStatusJobModal/UpdateStatusJobModal';
import type { IMyJobsComponent } from './IMyJobs';
import styles from './MyJobs.module.scss';
import { useMyJobsActions } from './useMyJobsActions';

const { Title } = Typography;
const { myJobs } = locales;

const MyJobsComponent: FC<IMyJobsComponent.IProps> = ({
  currentUserRoleName,
  handleSearchChange,
  exportAllJobs,
  loading,
  width,
  filteredData,
  allJobs,
  search,
  setTemplateJobs,
  templateJobs,
}) => {
  const { loadingDelete, deleteTemplateJobs } = useMyJobsActions();

  return (
    <>
      <FillJobModal />
      <CancelJobModal />
      <DuplicateJobModal />
      <TemplateJobsModal setTemplateJobs={setTemplateJobs} />
      <UpdateStatusJobModal />
      <div className={styles.main_container}>
        <Typography.Title className={styles.main_container__buyer}>
          {currentUserRoleName}
        </Typography.Title>
        <Title level={2} className={styles.main_container__title}>
          {myJobs.title}
        </Title>
        <Row className={styles.top_bar}>
          <div className={styles.search}>
            <Input
              id="search"
              type="text"
              icon="search"
              isLabel={false}
              inputHeight="43px"
              inputBackground="transparent"
              placeholder={myJobs.inputSearch}
              onChange={handleSearchChange}
              inputWidth={width <= TABLET_BREAKPOINT ? '100%' : '273px'}
            />
          </div>
          <div className={styles.export}>
            {templateJobs?.length > 0 && (
              <Button
                size="large"
                type="default"
                className={styles.dropdown__button}
                onClick={() => deleteTemplateJobs(templateJobs)}
                loading={loadingDelete}
              >
                {myJobs.DeleteTemplates}
              </Button>
            )}
            <ExportDropdown
              responsive={false}
              exportData={(type) => exportAllJobs(type)}
            />
          </div>
        </Row>
        <TableMyJobs
          search={search}
          loading={loading}
          dataTable={allJobs}
          filteredData={filteredData}
          setTemplateJobs={setTemplateJobs}
        />
      </div>
    </>
  );
};

export default MyJobsComponent;
