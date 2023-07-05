import { ACTIONS, DASHBOARDTYPES } from '@/consts/permissions';

export const getCurrentDashboard = (pathnameSegments: string[]) => {
  return pathnameSegments.find(
    (word) => word === DASHBOARDTYPES.buyer || word === DASHBOARDTYPES.supplier
  );
};
export const getCurrentAction = (pathnameSegments: string[]) => {
  return pathnameSegments.find(
    (word) =>
      word === ACTIONS.create || word === ACTIONS.view || word === ACTIONS.edit
  );
};
