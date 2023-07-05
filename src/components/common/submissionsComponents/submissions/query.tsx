import resource from '@/infrastructure/services/submissionsResource';

const fetcher = async (_url: string) => {
  return resource.getAll();
};
const query = { url: '/submissions/readAll', fetcher };
export default query;
