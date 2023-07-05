/* eslint-disable no-nested-ternary */
import router from 'next/router';
import type { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import ExportDropdown from '@/components/common/exportDropdownComponent/ExportDropdownComponent';
import Input from '@/components/common/input/Input';
import { Button, Row, Typography } from '@/components/designSystem';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { userCretaeUI } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';
import RequestService from '@/infrastructure/services';

import type { IUserComponent } from './IUserComponent';
import TableUsers from './tableUser/TableUsers';
import styles from './userComponent.module.scss';

const { Title } = Typography;

const UserComponent: FC<IUserComponent.IProps> = ({
  dataUser,
  filters,
  filteredData,
  handleSearchChange,
  loading,
  search,
  setDataUser,
  setFilters,
  setFilteredData,
}) => {
  const { width = 0 } = useWindowDimensions();

  const downloadAsCsv = (data: string): void => {
    const element = document.createElement('a');
    element.id = 'download-csv';
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`
    );
    element.setAttribute('download', 'users.csv');
    document.body.appendChild(element);
    (document.querySelector('#download-csv') as any).click();
    element.remove();
  };

  const downloadAsTxt = (data: string): void => {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(data)}`
    );
    element.setAttribute('download', 'users.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    element.remove();
  };

  const downloadAsJson = (data: string): void => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const element = document.createElement('a');
    element.setAttribute('href', dataStr);
    element.setAttribute('download', 'users.json');
    document.body.appendChild(element); // required for firefox
    element.click();
    element.remove();
  };

  const exportFile = async (type: string) => {
    const { userRole } = filters;
    let userRoleParams: string = '';
    userRole.forEach((role) => {
      userRoleParams = userRoleParams.concat(`&user_role=${role}`);
    });
    const value = filters.userStatus[0];
    const userStatus =
      value !== undefined ? (value === true ? 'Active' : 'Inactive') : '';
    await RequestService.exportUsers(
      type,
      userStatus,
      userRoleParams,
      search
    ).then((response: any) => {
      if (response.status === 200) {
        if (type === 'csv') downloadAsCsv(response.data);
        if (type === 'txt') downloadAsTxt(response.data);
        if (type === 'json') downloadAsJson(response.data);
      }
    });
  };

  return (
    <>
      <div className={styles.users}>
        <Title level={2} className={styles.users__title}>
          {userCretaeUI.USER_CREATION_TEXT.title_users}
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
            <ExportDropdown exportData={(type) => exportFile(type)} />
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              onClick={() => {
                router.push('/home/users/create', undefined, {
                  shallow: true,
                });
              }}
            >
              <AiOutlinePlus className={styles.buttons__add_icon} />
              Add new user
            </Button>
          </div>
        </Row>
        <TableUsers
          search={search}
          loading={loading}
          dataUser={dataUser}
          setDataUser={setDataUser}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          filters={filters}
          setFilters={setFilters}
        />
      </div>
    </>
  );
};

export default UserComponent;
