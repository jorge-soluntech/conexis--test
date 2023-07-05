import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { hidePostJobButtonForMSP } from '@/application/roleSlice/roleSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useLoggedAsUserRole from '@/components/hooks/useLoggedAsUserRole';
import { levels, roles } from '@/consts';

import styles from './switchToggle.module.scss';

const SwitchToggle: FC = () => {
  const { currentUserRole } = useAppSelector((state) => state.dashboard);

  const dispatch = useAppDispatch();
  const { changeCurrentUserRoleSelect } = useLoggedAsUserRole();
  const { userLevel } = useAppSelector((state) => state.role);

  const [toggle, setToggle] = useState(true);

  const { buyer } = roles.LOGGED_AS;

  useEffect(() => {
    const stateSwitch = currentUserRole === buyer;
    setToggle(stateSwitch);
    if (userLevel === levels.msp)
      dispatch(hidePostJobButtonForMSP(stateSwitch));
  }, [currentUserRole, userLevel]);

  const handleToggle = (state: boolean) => {
    setToggle(state);
    changeCurrentUserRoleSelect(state);
  };

  return (
    <div
      className={
        currentUserRole === buyer
          ? styles.switch_button_buyer
          : styles.switch_button_supplier
      }
      onClick={() => handleToggle(!toggle)}
    >
      <input
        className={
          currentUserRole === buyer
            ? styles.switch_button_buyer_checkbox
            : styles.switch_button_supplier_checkbox
        }
        type="checkbox"
        checked={currentUserRole !== buyer}
        readOnly
      ></input>

      <label className={styles.switch_button_label} htmlFor="">
        <span className={styles.switch_button_label_icon_buyer} />
        <span className={styles.switch_button_label_span}>
          {buyer?.toUpperCase()}
        </span>
        <span className={styles.switch_button_label_icon} />
      </label>
    </div>
  );
};

export default SwitchToggle;
