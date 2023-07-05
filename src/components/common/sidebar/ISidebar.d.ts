declare namespace ISidebar {
  export interface IProps {
    /** The title parameter */
    mainList: { key: string; label: string; icon: JSX.Element }[];
    otherItemsList: { key: string; label: string }[];
    myAccountListSider?: { key: string; label: string }[];
  }

  export interface IMenuList {
    title: any;
    key: string;
    label: string;
    icon: JSX.Element;
  }
}

export { ISidebar };
