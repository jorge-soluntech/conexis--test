import { Col, Form, Row } from 'antd';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useState } from 'react';

import {
  clearInfoCandidate,
  setConfirmLoading,
  setOpenModal,
  updateWorkerStatus,
} from '@/application/candidatesSlice/candidatesSlice';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { workers } from '@/consts';
import locales from '@/locales/en/en.json';

import FormSuccessModal from '../../FormSuccessModalComponent/FormSuccessModal';
import SelectWorkerStatus from '../selectWorkerStatus/SelectWorkerStatus';
import styles from './modalEditWorker.module.scss';

const ModalEditWorker: FC = () => {
  const { openModal, infoCandidate, confirmLoading } = useAppSelector(
    (state) => state.candidates
  );
  const { candidates } = locales;
  const [, , workerStatus] = workers.FORM_FIELDS.mandatories;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [statusWorker, setStatusWorker] = useState(infoCandidate?.workerStatus);

  const triggerChange = async () => {
    const updatedStatus = await dispatch(
      updateWorkerStatus({
        router,
        body: { worker_status: statusWorker },
        idCandidate: infoCandidate.key,
      })
    );

    if (updatedStatus?.payload.statusCode === 200) {
      dispatch(setConfirmLoading(false));
      dispatch(setOpenModal(false));
    }
  };

  const onStatusChange = (value: string) => setStatusWorker(value);

  const handleCandel = () => {
    dispatch(setOpenModal(false));
    setTimeout(() => {
      dispatch(clearInfoCandidate());
    }, 500);
  };

  return (
    <FormSuccessModal
      isModal={openModal}
      isLoading={confirmLoading}
      handleSave={triggerChange}
      handleCancel={handleCandel}
      showSuccess={false}
      titleSave={candidates.modalEdit.buttonSave}
      titleCancel={candidates.modalEdit.buttonCancel}
    >
      <Form layout="vertical" validateTrigger="onSubmit">
        <Row className={styles.row}>
          <Col span={24}>
            <Form.Item
              label={candidates.create.labelStatus}
              name={workerStatus}
              className={styles.label}
              rules={[{ required: true }]}
            >
              <SelectWorkerStatus
                onStatusChange={onStatusChange}
                isSelectCreate={false}
                defaultValueSelect={infoCandidate?.workerStatus}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </FormSuccessModal>
  );
};

export default ModalEditWorker;
