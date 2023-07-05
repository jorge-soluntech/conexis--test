import type { TableProps } from 'antd';
import { Switch } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import router from 'next/router';
import type { FC } from 'react';
import React, { useState } from 'react';

import Filter from '@/assets/filter';
import RequestService from '@/infrastructure/services';

import TableComponent from '../../tableComponent/Table';
import { getUserRolesAllowedFilters } from '../helpers/getUserRolesAllowedFilters';
import type { IUserComponent } from '../IUserComponent';
import type { ITableUser } from './ITableUser';
import styles from './TableUser.module.scss';

const DEFAULT_PAGE_SIZE = 20;

/**
 * returns the user table
 *
 * @param search - string with search criteria
 * @param loading - boolean indicating whether the data request is being made for the table
 * @param dataUser - object with the table data
 * @param setDataUser - function that modifies dataUser
 * @param filteredData - object with the table data filtered based on the searchText parameter
 * @param setFilteredData - function that modifies filteredData
 * @param filters - object containing all the filter criteria applied to the table
 * @param setFilters - function that modifies filters
 * @returns the user table
 */
const TableUsers: FC<ITableUser.IProps> = ({
  search,
  loading,
  dataUser,
  setDataUser,
  filteredData,
  setFilteredData,
  filters,
  setFilters,
}) => {
  const [page, setPage] = useState<number>(1);
  // The complexity of getUserRolesAllowedFilters depends on the size of the users array.
  // If the users array is relatively small, the function should execute quickly
  // and without any noticeable performance impact. otherwise it should be placed inside a useMemo hook.
  const userRoleFilters = getUserRolesAllowedFilters(dataUser);

  const updateStatus = (id: string) => {
    setDataUser((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
    setFilteredData((prevData: any) =>
      prevData.map((item: any) => {
        if (item.key === id) {
          return {
            ...item,
            status: !item.status,
          };
        }
        return item;
      })
    );
  };

  const handleChange = async (id: string, status: boolean): Promise<void> => {
    updateStatus(id);
    const userStatus: string = status ? 'Active' : 'Inactive';
    await RequestService.changeUserStatus(id, { user_status: userStatus }).then(
      (response: any) => {
        if (response.status !== 200) updateStatus(id);
      }
    );
  };

  const onChange: TableProps<any>['onChange'] = (
    pagination: any,
    filters: any
  ) => {
    const field = Object.keys(filters)[1];

    if (field) {
      const filterLength = filters[field]?.length;
      if (filterLength && filterLength > 0) {
        setFilters((prev: IUserComponent.Filter) => {
          return {
            userRole: field === 'userRole' ? filters.userRole : prev.userRole,
            userStatus: field === 'status' ? filters.status : prev.userStatus,
          };
        });
      } else {
        setFilters((prev: IUserComponent.Filter) => {
          return {
            userRole: field === 'userRole' ? [] : prev.userRole,
            userStatus: field === 'status' ? [] : prev.userStatus,
          };
        });
      }
    }
    setPage(pagination.current as number);
  };

  const columns: ColumnsType<IUserComponent.DataUserMapped> = [
    {
      title: () => <span className={styles.headerTable}>Name</span>,
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      className: styles.columnTable,
    },
    {
      title: () => <span className={styles.headerTable}>Email</span>,
      dataIndex: 'email',
      className: styles.columnTable,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: () => <span className={styles.headerTable}>User role</span>,
      dataIndex: 'userRole',
      className: styles.columnTable,
      filters: userRoleFilters,
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.userRole.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: string | number | boolean, record) =>
        record.userRole.indexOf(`${value}`) === 0,
      sorter: (a, b) => a.userRole.localeCompare(b.userRole),
    },
    {
      title: () => <span className={styles.headerTable}>User Status</span>,
      dataIndex: 'status',
      filterMultiple: false,
      className: styles.columnTable,
      filters: [
        {
          text: 'Active',
          value: true,
        },
        {
          text: 'Inactive',
          value: false,
        },
      ],
      filterIcon: () => (
        <Filter
          height={16}
          width={16}
          fill={filters.userStatus.length > 0 ? '#96bc33' : '#BFBFBF'}
        />
      ),
      onFilter: (value: any, record) => record.status === value,
      sorter: (a: any, b: any) => b.status - a.status,
      render: (status: boolean, record: any) => {
        return (
          <div style={{ minWidth: '104px' }}>
            <Switch
              style={{
                backgroundColor: status ? '#96BC33' : '#BFBFBF',
              }}
              size="small"
              checked={status}
              onChange={() => handleChange(record.key, !status)}
            />
            <span
              className={styles.userStatus}
              style={{ color: status ? '#303336' : '#888E95' }}
            >
              {status ? 'Active' : 'Inactive'}
            </span>
          </div>
        );
      },
    },
    {
      title: () => <span className={styles.headerTable}>Actions</span>,
      dataIndex: 'actions',
      className: styles.columnTable,
      render: (_value, record: any) => (
        <span
          onClick={() => {
            router.push(`/home/users/update/${record.key}`);
          }}
          className={styles.wrapperLinkActions}
        >
          <Image
            alt="edit"
            width={16}
            height={16}
            src={'/assets/icons/edit.svg'}
          />
        </span>
      ),
    },
  ];

  return (
    <TableComponent
      page={page}
      loading={loading}
      dataTable={search ? filteredData : dataUser}
      pageSize={DEFAULT_PAGE_SIZE}
      columns={columns}
      onChange={onChange}
      rowsSkeleton={8}
      columnsSkeleton={5}
    />
  );
};

export default TableUsers;
