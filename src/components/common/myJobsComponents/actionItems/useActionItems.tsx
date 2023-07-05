import { ACTIONS, AVAILABLE_ACTIONS } from '@/consts/myJobs';
import locales from '@/locales/en/en.json';

const {
  myJobs: { dots },
} = locales;

interface MenuItem {
  key: string;
  label: JSX.Element;
}

const useActionItems = (status: string) => {
  const actionItems: MenuItem[] = [
    {
      key: ACTIONS.delete,
      label: <span>{dots.delete}</span>,
    },
    {
      key: ACTIONS.setToFilled,
      label: <span>{dots.fillJob}</span>,
    },
    {
      key: ACTIONS.cancel,
      label: <span>{dots.cancelJob}</span>,
    },
    {
      key: ACTIONS.putOnHold,
      label: <span>{dots.putOnHold}</span>,
    },
    {
      key: ACTIONS.addSubmission,
      label: <span>{dots.addSubmission}</span>,
    },
    {
      key: ACTIONS.repost,
      label: <span>{dots.repost}</span>,
    },
    {
      key: ACTIONS.duplicateAsTemplate,
      label: <span>{dots.duplicateTemplate}</span>,
    },
  ];

  const allowedItems: any = AVAILABLE_ACTIONS[status];
  const filteredActionItems = actionItems.filter(
    (item) => allowedItems?.includes(item.key) ?? true
  );

  const availableEdit = allowedItems?.includes(ACTIONS.edit);

  return { actionItems: filteredActionItems, availableEdit };
};

export default useActionItems;
