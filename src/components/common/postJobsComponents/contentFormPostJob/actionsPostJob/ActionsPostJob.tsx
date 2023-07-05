import type { MenuProps } from 'antd';
import { Button, Col, Dropdown, Row } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useCallback } from 'react';

import {
  resetValuesFormPostJob,
  setValueSubmitStatus,
} from '@/application/postJobsSlice/postJobsSlice';
import ArrowDown from '@/assets/arrowDown';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { postJobsUI, urls } from '@/consts';
import { MOBILE_BREAKPOINT } from '@/consts/breakpoints';
import locales from '@/locales/en/en.json';

import type { IPostNewJobs } from '../../postNewJobs/IPostNewJobs';
import styles from './actionsPostJob.module.scss';

const {
  postNewJob: { formCreate },
} = locales;

const ActionsPostJob: FC<IPostNewJobs.PropsActions> = ({ form }) => {
  const { width = 0 } = useWindowDimensions();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading } = useAppSelector((state) => state.postJobs);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    dispatch(setValueSubmitStatus(e.key));
    form?.submit();
  };

  const menuProps = {
    items: postJobsUI.SAVE_OPTIONS,
    onClick: handleMenuClick,
  };

  const handleSend = useCallback(() => {
    dispatch(setValueSubmitStatus(postJobsUI.OPTIONS_SAVE_STATUS.isSentNow));
    form?.submit();
  }, [dispatch, form]);

  const handleCancel = () => {
    dispatch(resetValuesFormPostJob());
    router.push(urls.URL_MY_JOBS);
  };

  return (
    <Row justify={'end'} gutter={[8, 8]} className={styles.actions_form}>
      <Col xs={12} md={4} className={styles.col_cancel}>
        <Button
          type="default"
          htmlType="button"
          onClick={handleCancel}
          className={styles.submit}
          block={width <= MOBILE_BREAKPOINT}
        >
          {formCreate.titleCancel}
        </Button>
      </Col>
      <Col xs={12} md={4} className={styles.col_save}>
        <Dropdown
          menu={menuProps}
          trigger={['click']}
          overlayClassName={styles.dropdown}
          placement="bottomRight"
        >
          <Button
            size="large"
            type="default"
            htmlType="button"
            className={styles.dropdown__button}
            block={width <= MOBILE_BREAKPOINT}
            loading={loading.loadingSave}
          >
            <span className={styles.dropdown__title}>
              {formCreate.titleSave}
            </span>
            <div className={styles.dropdown__icon_wrapper}>
              <ArrowDown />
            </div>
          </Button>
        </Dropdown>
      </Col>
      <Col xs={24} md={4} className={styles.col_send}>
        <Button
          type="primary"
          htmlType="button"
          onClick={handleSend}
          className={styles.send_now}
          block={width <= MOBILE_BREAKPOINT}
          loading={loading.loadingSend}
        >
          {formCreate.titleSend}
        </Button>
      </Col>
    </Row>
  );
};

export default ActionsPostJob;
