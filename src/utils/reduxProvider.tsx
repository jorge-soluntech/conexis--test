import type { FC, ReactNode } from 'react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/application/store';

const ReduxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
