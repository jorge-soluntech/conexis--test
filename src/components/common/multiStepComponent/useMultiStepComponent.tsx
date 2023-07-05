export const useMultiStepComponent = () => {
  const StepsComponents = [
    {
      step: 0,
      component: <>test</>,
    },
    {
      step: 1,
      component: <>test</>,
    },
    {
      step: 2,
      component: <>test</>,
    },
    {
      step: 3,
      component: <>test</>,
    },
  ];
  return { StepsComponents };
};
