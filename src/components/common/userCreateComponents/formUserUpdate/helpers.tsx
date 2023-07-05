import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

import { Tag } from '@/components/designSystem';

// %%%%%%%%%%  useful functions to render the title and items of the select
export const renderTitle = (title: string) => <span>{title}</span>;
export const renderItem = (title: string, id: string) => ({
  id,
  label: title,
  value: title,
});

// select multiple items style renderre
export const tagRender = (props: CustomTagProps) => {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={'#E6F1CB'}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

export type FieldsValues = {
  first_name: string;
  last_name: string;
  email: string;
  user_roles: string;
  legacy_permissioned_buyers: string;
};

// "typeUser" is conditionally chained because values is passed to the component
// as a prop and is not available on the first render but when the data si ready it becomes available.
export const getFieldValues = (values: FieldsValues) => ({
  firstName: values.first_name,
  lastName: values.last_name,
  email: values.email,
  typeUser: values.user_roles?.[0],
  buyer: values.legacy_permissioned_buyers
    ? values.legacy_permissioned_buyers
    : undefined,
});
