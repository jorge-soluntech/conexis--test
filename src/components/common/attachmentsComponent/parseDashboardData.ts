import type { Attachment } from '@/consts/Attachments';
import { DASHBOARDTYPES } from '@/consts/permissions';
import phoneFormatter from '@/utils/phoneFormatter';

import type { IFormAttachment } from './IFormAttachment';

/** This function parse the logic to upload the attachments
 * and @returns a copy of the attachments
 */
export const parseCopyAttachments = ({
  attachments,
  dashboard,
}: IFormAttachment.IparseCopyAttachments) => {
  const copiedAttachments: Attachment.CreateUpdateAttachment[] = attachments
    .filter((attachments: any) => attachments !== undefined)
    .map((attachment: any) => {
      const uploadedAttachment: Attachment.IuploadedAttachment = {
        name: attachment.name,
        file: attachment.path,
        type: attachment.type,
        original_name: attachment.file.name,
        expiry_date: attachment.expiryDate,
      };
      if (dashboard === DASHBOARDTYPES.supplier) {
        uploadedAttachment.buyer_id = attachment.buyer;
      }
      return uploadedAttachment;
    });
  const copyAttachments = copiedAttachments.filter((attachment) => attachment);
  return copyAttachments;
};

/** This function parse the logic to obtain an object
 *  to edit a supplier or buyer
 */
export const parseDashboardData = async ({
  dashboardData,
  idTenant,
  dashboard,
  attachments,
}: IFormAttachment.IparseDashboardData) => {
  const copyAttachments = parseCopyAttachments({
    dashboard,
    attachments,
  });
  if (dashboard === DASHBOARDTYPES.supplier) {
    return {
      ...dashboardData,
      id_tenant: idTenant,
      attachments: copyAttachments,
      secondary_contact_email:
        dashboardData.secondary_contact_email === ''
          ? null
          : dashboardData.secondary_contact_email,
      tertiary_contact_email:
        dashboardData.tertiary_contact_email === ''
          ? null
          : dashboardData.tertiary_contact_email,
      accounts_receivable_contact_email:
        dashboardData.accounts_receivable_contact_email === ''
          ? null
          : dashboardData.accounts_receivable_contact_email,
      primary_contact_phone: phoneFormatter(
        dashboardData.primary_contact_phone
      ),
      geographic_coverage: [dashboardData.geographic_coverage].flat(),
      diversity_certifications: [dashboardData.diversity_certifications].flat(),
    };
  }

  const dataToSend: any = {};
  Object.keys(dashboardData).forEach((key) => {
    const snakeCaseKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
    dataToSend[snakeCaseKey] = dashboardData[key];
  });

  dataToSend.id_tenant = idTenant;
  dataToSend.primary_contact_email =
    dashboardData.primaryContactEmail === ''
      ? null
      : dashboardData.primaryContactEmail;

  dataToSend.accounts_payable_contact_email =
    dashboardData.accountsPayableContactEmail === ''
      ? null
      : dashboardData.accountsPayableContactEmail;
  /** the value of the bypassJobApproval and bypassSubmissionApproval fields are reversed in the database.
   * This means that if the answer to this field is "no", the database must store a True and vice versa. */
  dataToSend.bypass_job_approval = !dashboardData.bypassJobApproval;
  dataToSend.bypass_submission_approval =
    !dashboardData.bypassSubmissionApproval;
  dataToSend.contract_approver_id = dashboardData.contractApproverId?.value;
  dataToSend.attachments = copyAttachments;

  return dataToSend;
};
