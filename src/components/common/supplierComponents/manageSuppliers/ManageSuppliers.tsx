import { Button, Row, Typography } from 'antd';
import router from 'next/router';
import type { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Input from '@/components/common/input/Input';
import { useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';
import { DASHBOARDTYPES } from '@/consts/permissions';
import locales from '@/locales/en/en.json';

import TableManageSuppliers from '../tableManageSuppliers/TableManageSuppliers';
import type { IManageSuppliers } from './IManageSuppliers';
import styles from './manageSuppliers.module.scss';

const { Title } = Typography;
const { suppliers } = locales;

const ManageSuppliers: FC<IManageSuppliers.IProps> = ({
  dataManageSuppliers,
  filters,
  filteredData,
  handleSearchChange,
  loading,
  searchText,
  setFilteredData,
  setDataManageSuppliers,
}: IManageSuppliers.IProps) => {
  const { width = 0 } = useWindowDimensions();
  const { currentUserRoleName } = useAppSelector((state) => state.dashboard);

  return (
    <>
      <div className={styles.suppliers}>
        <Title level={4} className={styles.suppliers__buyer}>
          {currentUserRoleName}
        </Title>
        <Title level={3} className={styles.suppliers__title}>
          {suppliers.title}
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
              style={{
                fontWeight: 400,
              }}
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => {
                router.push('/home/suppliers/create');
              }}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              Add supplier
            </Button>
          </div>
        </Row>
        <TableManageSuppliers
          dashboard={DASHBOARDTYPES.supplier}
          searchText={searchText}
          loading={loading}
          dataManageSuppliers={dataManageSuppliers}
          setDataManageSuppliers={setDataManageSuppliers} // NOTE::  not sure why this is here it is not being used by "TableManageSuppliers"
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          columnFilters={filters}
        />
      </div>
    </>
  );
};

export default ManageSuppliers;
