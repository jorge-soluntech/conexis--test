declare namespace ISkeletonTable {
  export interface IProps {
    rows: number;
    columns: number;
    loading: boolean;
    children?: JSXElement;
  }
}

export { ISkeletonTable };
