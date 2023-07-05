declare namespace ICardTop {
  export interface IProps {
    /** The title parameter */
    title: string;
    onClick: () => void;
    list: IList[];
  }
  export interface IList {
    label: string;
    value: string;
  }
}

export { ICardTop };
