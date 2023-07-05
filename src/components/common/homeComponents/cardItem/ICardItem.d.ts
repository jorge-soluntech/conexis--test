declare namespace ICardItem {
  export interface IProps {
    /** The title parameter */
    quantity: number;
    title: string;
    color: string;
    status: boolean;
    onHover: (position: number) => void;
    onClick: () => void;
    index: number;
    style: object;
  }
}

export { ICardItem };
