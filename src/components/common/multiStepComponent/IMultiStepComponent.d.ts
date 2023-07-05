export type TMultiStepComponent =
  | ({
      dashboard: 'suppliers';
      setStep: any;
      clearDataState: any;
    } & TCommonProps)
  | ({
      dashboard: 'buyers';
      clearDataState: ActionCreatorWithoutPayload<'buyers/clearDataStateBuyer'>;
      setStep: ActionCreatorWithPayload<number, 'buyers/setStepBuyer'>;
    } & TCommonProps);

type TCommonProps = {
  stepProgressComponent: (
    | {
        title: JSX.Element;
      }
    | {
        title: string;
      }
  )[];
  titleForm: string;
  stepsComponents: {
    step: number;
    component: JSX.Element;
  }[];
  currentStep: number;
};
