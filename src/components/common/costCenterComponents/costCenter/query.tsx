import { COST_CENTER_ENDPOINTS } from '@/consts/cost_centers_ui';
import resource from '@/infrastructure/services/CostCenterResource';

export const toggleCostCenter = async (
  _url: string,
  { arg }: { arg: { key: string } }
) => {
  const result = await resource.toggle(arg.key);
  return resource.transform(result.data);
};

const fetcher = async (_url: string) => {
  return resource.getAll();
};
const query = { url: COST_CENTER_ENDPOINTS.read_all, fetcher };
export default query;
