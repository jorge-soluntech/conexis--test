import type { MenuProps } from 'antd';
import { Button, Dropdown } from 'antd';
import { useState } from 'react';

import ArrowDown from '@/assets/arrowDown';
import Export from '@/assets/export';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/breakpoints';
import locales from '@/locales/en/en.json';

import styles from './ExportDropdownComponent.module.scss';
import type { IExportDropdownComponent } from './IExportDropdownComponent';

/**
 * ExportDropdown component that displays a button that pulls down a menu with options for exporting data.
 *
 * @param {(data: string) => void} props.exportData - Function to handle exporting the data.
 * @param {boolean} props.responsive - Indicates whether the component should be responsive.
 * @returns React component that renders a button that displays a menu with options to export data.
 */
const ExportDropdown = ({
  exportData,
  responsive = true,
}: IExportDropdownComponent.IProps): JSX.Element => {
  const {
    components: { exportDropdown },
  } = locales;

  const { width = 0 } = useWindowDimensions();
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleDropdownVisibleChange = (visible: boolean) => {
    setDropdownVisible(visible);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <div
          onClick={() => {
            setDropdownVisible(false);
            exportData('csv');
          }}
        >
          {exportDropdown.exportCsv}
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div
          onClick={() => {
            setDropdownVisible(false);
            exportData('txt');
          }}
        >
          {exportDropdown.exportTxt}
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          onClick={() => {
            setDropdownVisible(false);
            exportData('json');
          }}
        >
          {exportDropdown.exportJson}
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      open={dropdownVisible}
      overlayClassName={styles.dropdown}
      onOpenChange={handleDropdownVisibleChange}
    >
      <Button size="large" type="default" className={styles.dropdown__button}>
        <div
          className={`${styles.dropdown__icon_wrapper} ${
            responsive &&
            width < MOBILE_BREAKPOINT &&
            styles.dropdown__export_icon_mobile
          }`}
        >
          <Export />
        </div>
        {(!responsive || width > MOBILE_BREAKPOINT) && (
          <span className={styles.dropdown__title}>{exportDropdown.title}</span>
        )}
        <div className={styles.dropdown__icon_wrapper}>
          <ArrowDown />
        </div>
      </Button>
    </Dropdown>
  );
};

export default ExportDropdown;
