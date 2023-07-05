import React from 'react';

const childrenByType = <T extends React.ElementType>(
  children: React.ReactNode,
  componentType: T
): React.ReactElement<React.ComponentProps<T>>[] => {
  return React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type === componentType
  ) as React.ReactElement<React.ComponentProps<T>>[];
};

export default childrenByType;
