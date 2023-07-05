import { Select } from 'antd';
import type { FC } from 'react';
import React, { useMemo } from 'react';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { MOBILE_BREAKPOINT } from '@/consts/breakpoints';
import locales from '@/locales/en/en.json';

const { Option } = Select;

type Props = {
  /** Onchange method of select */
  onStatusChange: (value: string) => void;
  isSelectCreate: boolean;
  defaultValueSelect?: string;
};

const SelectWorkerStatus: FC<Props> = ({
  onStatusChange,
  isSelectCreate,
  defaultValueSelect,
}) => {
  const { candidates } = locales;
  const { width = 0 } = useWindowDimensions();

  const renderDefaultValue = useMemo(() => {
    if (isSelectCreate) return null;
    return defaultValueSelect as string;
  }, [isSelectCreate, defaultValueSelect]);

  return (
    <Select
      onChange={onStatusChange}
      placement={width <= MOBILE_BREAKPOINT ? 'topLeft' : 'bottomLeft'}
      defaultValue={renderDefaultValue}
      placeholder={candidates.create.placeholderStatus}
    >
      {candidates.create.optionsWorkerStatus.map((option, index) => (
        <Option key={index} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default SelectWorkerStatus;
