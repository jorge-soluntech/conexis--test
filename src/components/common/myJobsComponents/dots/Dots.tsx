import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import type { FC, MouseEvent } from 'react';

import { setSelectedJobId } from '@/application/jobsSlice/jobsSlice';
import Edit from '@/assets/edit';
import EllipsisOutlined from '@/assets/ellipsisOutlined';
import { useAppDispatch } from '@/components/hooks/storeHooks';

import useActionItems from '../actionItems/useActionItems';
import styles from './Dots.module.scss';
import type { IDots } from './IDots';

const Dots: FC<IDots.IProps> = ({
  jobId,
  status,
  dropdownVisible,
  handleModalDispatch,
  handleDropdownVisibleChange,
}) => {
  const dispatch = useAppDispatch();

  const { actionItems, availableEdit } = useActionItems(status);

  const handleOnOpenDropdown = (value: boolean) => {
    dispatch(setSelectedJobId(jobId));
    handleDropdownVisibleChange(value);
  };

  const handleModal: MenuProps['onClick'] = ({ key }) => {
    handleModalDispatch(key, jobId);
  };

  const preventDefault = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.actions}>
      {availableEdit && (
        <span className={styles.actions__link}>
          <Edit />
        </span>
      )}
      {actionItems.length > 0 && (
        <Dropdown
          trigger={['click']}
          placement="bottomRight"
          open={dropdownVisible}
          overlayClassName={styles.dropdown}
          onOpenChange={handleOnOpenDropdown}
          menu={{ items: actionItems, onClick: handleModal }}
        >
          <span className={styles.dropdown__icon} onClick={preventDefault}>
            <EllipsisOutlined />
          </span>
        </Dropdown>
      )}
    </div>
  );
};

export default Dots;
