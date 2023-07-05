import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';

import { AuthContext } from '@/application/authContext';
import { useAppSelector } from '@/components/hooks/storeHooks';
import type { ISupplier } from '@/consts/ISupplierState';
import { SupplierServices } from '@/infrastructure/services/SupplierServices';

import type { IManageSuppliers } from './manageSuppliers/IManageSuppliers';

const useManageSuppliers = () => {
  // searchText should be renamed along with all others states like this to
  // infer a boolean e.g. "hasSearchText"
  const [searchText, setSearchText] = useState<boolean>(false);
  const [loading, setLoader] = useState<boolean>(true);
  const [filters, setFilters] =
    useState<IManageSuppliers.ManageSuppliersFilters>({
      status: [],
      expiration: [],
      contactEmail: [],
      contactName: [],
    });
  const [dataManageSuppliers, setDataManageSuppliers] = useState<
    ISupplier.GetMultipleSuppliers[]
  >([]);
  const [filteredData, setFilteredData] = useState<
    ISupplier.GetMultipleSuppliers[]
  >([]);

  const router = useRouter();
  const supplierServices = new SupplierServices(router);
  const { dataUser } = useContext(AuthContext);

  const { page } = useAppSelector((state) => state.suppliers);

  const handleSearchChange = (value: string) => {
    if (value.toLowerCase() !== '') {
      setSearchText(true);
      const filterData = dataManageSuppliers.filter((item: any) =>
        item.supplierCompanyName?.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filterData);
    } else {
      setSearchText(false);
    }
  };

  const getDataSuppliers = useCallback(async (): Promise<void> => {
    await supplierServices.getSuppliers(page).then((response) => {
      const resultDetails = response.data.suppliers.map(
        ({
          id,
          id_number,
          agreement_expiry_date,
          supplier_company_name,
          supplier_status,
          primary_contact_name,
          primary_contact_email,
          account,
          is_non_resident_supplier,
          primary_contact_phone,
          country,
          street_address_line1,
          rating,
          geographic_coverage, // array
          diversity_certifications, // array
          dunn_and_bradstreet_number,
          secondary_contact_name,
          secondary_contact_email,
          tertiary_contact_name,
          tertiary_contact_email,
          tax_id,
          work_categories_covered, // array
          accounts_receivable_contact_name,
          accounts_receivable_contact_email,
        }: ISupplier.GetMultipleSuppliers) => {
          const expiryDateFormatted = agreement_expiry_date
            ? `${agreement_expiry_date.slice(
                5,
                7
              )}/${agreement_expiry_date.slice(
                8,
                10
              )}/${agreement_expiry_date.slice(0, 4)}`
            : '';

          setFilters((state: any) => ({
            status:
              state.status?.indexOf(supplier_status) === -1
                ? [...state.status, supplier_status]
                : [...state.status],
            expiration:
              state.expiration?.indexOf(expiryDateFormatted) === -1
                ? [...state.expiration, expiryDateFormatted]
                : [...state.expiration],
            contactEmail:
              state.contactEmail?.indexOf(primary_contact_email) === -1
                ? [...state.contactEmail, primary_contact_email]
                : [...state.contactEmail],
            contactName:
              state.contactName?.indexOf(primary_contact_name) === -1
                ? [...state.contactName, primary_contact_name]
                : [...state.contactName],
          }));

          return {
            key: id,
            supplierCompanyName: supplier_company_name,
            contactName: primary_contact_name,
            contactEmail: primary_contact_email,
            idNumber: id_number,
            agreementExpiryDate: expiryDateFormatted,
            supplierStatus: supplier_status,
            supplierInformation: [
              {
                title: 'Created by',
                value: account?.full_name,
              },
              {
                title: 'Non resident supplier',
                value: is_non_resident_supplier ? 'No' : 'Yes',
              },
              {
                title: 'Supplier ID',
                value: id_number,
              },
              {
                title: 'Rating',
                value: rating,
              },
              {
                title: 'Supplier status',
                value: supplier_status,
              },
              {
                title: 'Supplier company name',
                value: supplier_company_name,
              },
              {
                title: 'Supplier contact name',
                value: primary_contact_name,
              },
              {
                title: 'Supplier contact phone',
                value: primary_contact_phone,
              },
              {
                title: 'Country',
                value: country,
              },
              {
                title: 'Supplier mailing address',
                value: street_address_line1,
              },
              {
                title: 'Supplier contact email',
                value: primary_contact_email,
              },
              {
                title: 'Geographic coverage',
                value: geographic_coverage[0],
              },
              {
                title: 'Diversity certification',
                value: diversity_certifications[0],
              },
              {
                title: 'Dun & bradstreet number',
                value: dunn_and_bradstreet_number,
              },
            ],
            additionalSupplierContacts: [
              {
                title: 'Supplier contact name 2',
                value: secondary_contact_name,
              },
              {
                title: 'Supplier contact email 2',
                value: secondary_contact_email,
              },
              {
                title: 'Supplier contact name 3',
                value: tertiary_contact_name,
              },
              {
                title: 'Supplier contact email 3',
                value: tertiary_contact_email,
              },
            ],
            taxes: {
              title: 'Tax ID',
              value: tax_id,
            },
            workCategory: {
              title: 'Work categories covered',
              value: work_categories_covered,
            },
            accountContactInformation: [
              {
                title: 'Accounts receivable contact name',
                value: accounts_receivable_contact_name,
              },
              {
                title: 'Accounts receivable contact email',
                value: accounts_receivable_contact_email,
              },
            ],
          };
        }
      );

      setDataManageSuppliers(resultDetails);
      setLoader(false);
    });
  }, [page]);

  useEffect(() => {
    getDataSuppliers();
  }, [dataUser?.logged_buyer]);

  return {
    dataManageSuppliers,
    filters,
    filteredData,
    handleSearchChange,
    loading,
    searchText,
    setFilteredData,
    setDataManageSuppliers,
  };
};

export default useManageSuppliers;
