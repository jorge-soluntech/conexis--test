declare namespace IExportDropdownComponent {
  export interface IProps {
    exportData: (type: string) => void;
    responsive?: boolean;
  }
}

export { IExportDropdownComponent };
