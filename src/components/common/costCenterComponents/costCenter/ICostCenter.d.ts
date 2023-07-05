declare namespace ICostCenter {
  export interface IProps {
    id: string;
    cost_center: string;
    cost_center_name: string;
    is_active: boolean;
  }

  export interface DataCostCenterMapped {
    key: string;
    cost_center: string;
    cost_center_name: string;
    status: boolean;
  }
}

export { ICostCenter };
