import resource from '@/infrastructure/services/BusinessUnitsResource';

export const toggleBusinessUnit = async (
  _url: string,
  { arg }: { arg: { key: string } }
) => {
  const result = await resource.toggle(arg.key);
  return resource.transform(result.data);
};

const fetcher = async (_url: string) => {
  return resource.getAll();
};

const query = {
  url: '/businessUnits/readAll',
  fetcher,
};

export default query;
