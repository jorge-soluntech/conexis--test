declare namespace IBusinessUnits {
  export interface DataBusinessUnits {
    id: string;
    id_number: string;
    region: string;
    address: string;
    location: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    primary_email: string;
    primary_phone: string;
    business_unit_number: string;
  }

  export interface DataBusinessUnitsMapped {
    key: string;
    region: string;
    address: string;
    location: string;
    idNumber: string;
    status: boolean;
    email: string;
    lastName: string;
    buOwner: string;
    phone: string;
    firstName: string;
    businessUnitNumber: string;
  }
}

export { IBusinessUnits };
