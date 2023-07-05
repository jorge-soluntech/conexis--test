import { useAppSelector } from '@/components/hooks/storeHooks';
import { ACTION_ITEMS_KEYS } from '@/consts/home_ui';

const useQuantityItemsDashboard = () => {
  const { jobsToApprove } = useAppSelector((state) => state.dashboard);

  const quantityMap: Record<string, number> = {
    [ACTION_ITEMS_KEYS.jobsToApprove]: jobsToApprove,
  };

  return {
    quantityMap,
  };
};

export default useQuantityItemsDashboard;
