import router from 'next/router';
import { useEffect, useState } from 'react';

import { UserServices } from '@/infrastructure/services/UserServices';

import en from '../../locales/en/en.json';

// %%%%%%%%%%  useful functions to render the title and items of the select
const renderItem = (title: string, id: string) => ({
  id,
  label: title,
  value: title,
});

const renderTitle = (title: string) => <span>{title}</span>;

// fetching user data
const userServices = new UserServices(router);

const useSetUserRole = () => {
  const [dataRoles, setDataRoles] = useState<any>({});
  const [roles, setRoles] = useState([{}]);

  // get the roles to create a user
  useEffect(() => {
    userServices.userRolesToCreate().then((res) => {
      setDataRoles(res);
    });
  }, []);

  // map roles data into
  useEffect(() => {
    if (dataRoles) {
      let roleOptions: any = [];
      if (dataRoles[en.users.data_roles.buyer]) {
        const options = dataRoles[en.users.data_roles.buyer].map(
          (roleItem: string) => {
            return renderItem(roleItem, roleItem);
          }
        );
        roleOptions = [
          ...roleOptions,
          { label: renderTitle(en.users.data_roles.buyer), options },
        ];
      }
      if (dataRoles[en.users.data_roles.msp]) {
        const options = dataRoles[en.users.data_roles.msp].map(
          (roleItem: string) => {
            return renderItem(roleItem, roleItem);
          }
        );
        roleOptions = [
          ...roleOptions,
          { label: renderTitle(en.users.data_roles.msp), options },
        ];
      }
      if (dataRoles[en.users.data_roles.supplier]) {
        const options = dataRoles[en.users.data_roles.supplier].map(
          (roleItem: string) => {
            return renderItem(roleItem, roleItem);
          }
        );
        roleOptions = [
          ...roleOptions,
          { label: renderTitle(en.users.data_roles.supplier), options },
        ];
      }

      if (dataRoles[en.users.data_roles.global]) {
        const options = dataRoles[en.users.data_roles.global].map(
          (roleItem: string) => {
            return renderItem(roleItem, roleItem);
          }
        );
        roleOptions = [
          ...roleOptions,
          { label: renderTitle(en.users.data_roles.global), options },
        ];
      }
      setRoles(roleOptions);
    }
  }, [dataRoles]);
  return { roles };
};

export default useSetUserRole;
