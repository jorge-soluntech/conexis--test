/* eslint-disable no-nested-ternary */
import router from 'next/router';
import { useEffect, useState } from 'react';

import { BuyerServices } from '@/infrastructure/services/BuyerServices';

import type { IBuyerComponent } from './IBuyerComponent';

const useGetBuyerData = () => {
  const [loading, setLoader] = useState<boolean>(false);
  const [dataTable, setDataTable] = useState<IBuyerComponent.DataBuyer[]>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>(
    "There's been an error. Please try again later."
  );

  const buyerServices = new BuyerServices(router);

  useEffect(() => {
    setLoader(true);

    buyerServices
      .getAllBuyers()
      .then((response) => {
        const result: IBuyerComponent.DataBuyer[] = response.data.buyers.map(
          (buyer) => ({
            key: buyer.id,
            clientCompanyName: buyer.client_company_name
              ? buyer.client_company_name
              : '-',
            clientContactName: buyer.primary_contact_name
              ? buyer.primary_contact_name
              : '-',
            clientContactEmail: buyer.primary_contact_email
              ? buyer.primary_contact_email
              : '-',
            clientContactPhone: buyer.primary_contact_phone
              ? buyer.primary_contact_phone
              : '-',
            accountOwner: buyer.account_owner ? buyer.account_owner : '-',
            contractExpirationDate: buyer.contract_expiry_date
              ? `${buyer.contract_expiry_date.slice(
                  5,
                  7
                )}/${buyer.contract_expiry_date.slice(
                  8,
                  10
                )}/${buyer.contract_expiry_date.slice(0, 4)}`
              : '-',
            details: {
              aditionalInfo: {
                legalNameInvoicing: buyer.legal_name_for_invoicing
                  ? buyer.legal_name_for_invoicing
                  : '-',
                clientMailingAddress: buyer.street_address_line1
                  ? buyer.street_address_line1
                  : '-',
                clientMailingAddress2: buyer.street_address_line2
                  ? buyer.street_address_line2
                  : '-',
                workWeekDefinition: buyer.work_week_definition
                  ? buyer.work_week_definition
                  : '-',
                currency: buyer.currency ? buyer.currency : '-',
              },
              taxes: {
                vatFederalTax: buyer.vat_amount ? `${buyer.vat_amount}%` : '-',
                provincialTax: buyer.sales_tax_amount
                  ? `${buyer.sales_tax_amount}%`
                  : '-',
                otherTax: buyer.other_tax_amount
                  ? `${buyer.other_tax_amount}%`
                  : '-',
              },
              approvals: {
                jobsRequireApproval:
                  buyer.bypass_job_approval !== undefined
                    ? buyer.bypass_job_approval
                      ? 'Yes'
                      : 'No'
                    : '-',
                submissionsRequireApproval:
                  buyer.bypass_submission_approval !== undefined
                    ? buyer.bypass_submission_approval
                      ? 'Yes'
                      : 'No'
                    : '-',
                accesToApplicantTrackingModule:
                  buyer.access_to_applicant_tracker !== undefined
                    ? buyer.access_to_applicant_tracker
                      ? 'Yes'
                      : 'No'
                    : '-',
                contractRequiresApproval:
                  buyer.require_contract_approval !== undefined
                    ? buyer.require_contract_approval
                      ? 'Yes'
                      : 'No'
                    : '-',
                accountsPayableContactName: buyer.accounts_payable_contact_name
                  ? buyer.accounts_payable_contact_name
                  : '-',
                accountsPayableContactEmail:
                  buyer.accounts_payable_contact_email
                    ? buyer.accounts_payable_contact_email
                    : '-',
              },
              documents: {
                clientAgreement: buyer.attachments?.map((attachment) => {
                  if (attachment.type === 'Client agreement') {
                    const file = {
                      name: attachment.name,
                      id: attachment.file,
                    };
                    return file;
                  }
                  return [];
                }),
                others: buyer.attachments?.map((attachment) => {
                  if (attachment.type !== 'Client agreement') {
                    const file = {
                      name: attachment.name,
                      id: attachment.file,
                    };
                    return file;
                  }
                  return [];
                }),
              },
            },
          })
        );
        setDataTable(result);
        setLoader(false);
      })
      .catch(() => {
        setMessageError("There's been an error. Please try again later.");
        setShowError(true);
      });
  }, []);

  return { loading, dataTable, showError, setShowError, messageError };
};

export default useGetBuyerData;
