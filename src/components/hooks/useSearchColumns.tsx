import { useState } from 'react';

type SearchProps = {
  excludeColumns?: string[];
};

const useSearchColumns = ({ excludeColumns }: SearchProps) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchText, setSearchText] = useState(false);

  const handleSearchChange = (value: string, listData: any[]) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '') {
      setFilteredData(listData);
      setSearchText(false);
    } else {
      setSearchText(true);
      const filteredData = listData?.filter((item) => {
        return Object.keys(item)?.some((key) =>
          excludeColumns?.includes(key) || key === 'key'
            ? false
            : item[key]?.toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setFilteredData(filteredData);
    }
  };

  return { handleSearchChange, filteredData, searchText };
};

export default useSearchColumns;
