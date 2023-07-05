import { ENDPOINT_JOBS } from '@/consts/endpoints';
import resource from '@/infrastructure/services/JobsResource';

const fetcher = async (_url: string) => {
  const result = await resource.pendingApproval();
  const data = result.data.map((item: any) => resource.transform(item));
  return data;
};
const query = { url: ENDPOINT_JOBS, fetcher };
export default query;
