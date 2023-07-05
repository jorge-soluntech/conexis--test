import type { ReactNode } from 'react';
import type { KeyedMutator } from 'swr';

export interface BaseLoaderProps {
  isLoading: boolean;
}

export type DataFetcher<T> = (url: string) => Promise<T>;

export type ConditionalDataResult<T> = {
  data: T | null;
  error: any;
  loading: boolean;
};
// NOTE:: for now the edit form does not need the loader
// like the table does so we omit it from the child props.
export interface FormLoaderProps<P> {
  children: ReactNode | ((data: Omit<P, 'loadingFormData'>) => ReactNode);
  useGetData: (args: any) => P;
  optionalHookArgs?: {};
  withFormSteps?: boolean;
  hasFormDetailsHeader?: boolean;
}

export interface DashBoardLoaderProps {
  children: ReactNode;
}

export interface PageLoaderProps<P> {
  children: (data: P) => ReactNode;
  useGetData: () => P;
}

type ChildProps = {
  data: any;
  error: any;
  mutate: KeyedMutator<any>;
  isValidating: boolean;
  isLoading: boolean;
};
export interface PageLoaderSWRProps {
  children: ({
    data,
    error,
    mutate,
    isValidating,
    isLoading,
  }: ChildProps) => ReactNode;
  fetcher: DataFetcher<any>;
  queryString: string;
}

export interface TableLoaderProps extends BaseLoaderProps {
  rowCount?: number;
}

export interface ActionItemCardLoaderProps extends BaseLoaderProps {
  color: string;
}
