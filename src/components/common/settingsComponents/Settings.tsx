import type { TabsProps } from 'antd';
import { Layout, Tabs, Typography } from 'antd';

import locales from '@/locales/en/en.json';

import PersonalInfo from './accountComponents/personalInfoComponent/PersonalInfo';
import ResetPassword from './accountComponents/resetPassordComponent/ResetPassword';
import styles from './Settings.module.scss';

const { Title } = Typography;
const { Content } = Layout;

/**
 * A component that contains the settings page of users.
 *
 * @returns A component with the settings page of users.
 */
const Settings = () => {
  const { settings } = locales;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: settings.information,
      children: <PersonalInfo />,
    },
    {
      key: '2',
      label: settings.resetPassword,
      children: <ResetPassword />,
    },
  ];

  return (
    <div className={styles.settings}>
      <Title level={3} className={styles.settings__title}>
        {settings.title}
      </Title>
      <Content>
        <div className={styles.form_container}>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </Content>
    </div>
  );
};

export default Settings;
