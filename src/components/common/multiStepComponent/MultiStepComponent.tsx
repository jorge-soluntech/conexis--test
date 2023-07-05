/* eslint-disable array-callback-return */

import { Layout, Steps, Typography } from 'antd';
import type { FC } from 'react';
import { Fragment, useEffect } from 'react';

import SuccessComponent from '@/components/common/successComponent/SuccessComponent';
import { useAppDispatch } from '@/components/hooks/storeHooks';
import { DASHBOARDTYPES } from '@/consts/permissions';

import type { TMultiStepComponent } from './IMultiStepComponent';
import styles from './MultiStep.module.scss';

const { Title } = Typography;
const { Content } = Layout;

/**
 * A form used to create a buyer.
 *
 * @param titleForm - The string of title form
 * @param setStep,
 * @param clearDataState,
 * @param dashboard,
 * @param stepProgressComponent,
 * @param stepsComponents,
 * @param currentStep,
 * @returns The form to create buyers
 */

const MultiStepComponent: FC<TMultiStepComponent> = ({
  titleForm,
  setStep,
  clearDataState,
  dashboard,
  stepProgressComponent,
  stepsComponents,
  currentStep,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStep(0));

    return () => {
      dispatch(clearDataState());
    };
  }, [clearDataState, dispatch, setStep]);

  return (
    <Content>
      <div className={styles.form_container}>
        <Title className={styles.form_container__title} level={2}>
          {titleForm}
        </Title>
        <Steps
          responsive={false}
          current={currentStep}
          className={`${styles.steps} ${
            dashboard === DASHBOARDTYPES.supplier ? 'supplier_steps' : ''
          }`}
          items={stepProgressComponent}
        />
        {stepsComponents.length > 0 &&
          stepsComponents.map(
            (step) =>
              step.step === currentStep && (
                <Fragment key={`${dashboard}_step_${step.step}`}>
                  {step.component}
                </Fragment>
              )
          )}
        {currentStep === stepsComponents.length && (
          <SuccessComponent
            textButton={`Go back to ${dashboard}`}
            route={`/home/${dashboard}`}
            title={
              <>
                {dashboard.charAt(0).toUpperCase() + dashboard.slice(1)} has
                been successfully <br /> submitted.
              </>
            }
          />
        )}
      </div>
    </Content>
  );
};

export default MultiStepComponent;
