import type { GetServerSideProps } from 'next';
import { useContext, useEffect } from 'react';

import { AuthContext } from '@/application/authContext';
import { getJobsPendingApprove } from '@/application/dashboardSlice/dashboardSlice';
import ApproverDashboard from '@/components/common/homeComponents/approverDashboard/ApproverDashboard';
import BuyerAdministratorDashboard from '@/components/common/homeComponents/buyerAdministratorDashboard/BuyerAdministratorDashboard';
import BuyerFinanceDashboard from '@/components/common/homeComponents/buyerFinanceDashboard/BuyerFinanceDashboard';
import DelegateDashboard from '@/components/common/homeComponents/delegateDashboard/DelegateDashboard';
import HiringManagerDashboard from '@/components/common/homeComponents/hiringManagerDashboard/HiringManagerDashboard';
import MSPDashboard from '@/components/common/homeComponents/mspDashboard/MSPDashboard';
import MSPFinance from '@/components/common/homeComponents/mspFinance/MSPFinance';
import ProgramManagerDashboard from '@/components/common/homeComponents/programManagerDashboard/ProgramManagerDashboard';
import RecruiterDashboard from '@/components/common/homeComponents/recruiterDashboard/RecruiterDashboard';
import SupplierFinanceDashboard from '@/components/common/homeComponents/supplierFinanceDashboard/SupplierFinanceDashboard';
import { DashboardLoader } from '@/components/common/loaders';
import { useAppDispatch, useAppSelector } from '@/components/hooks/storeHooks';
import { USER_ROLES } from '@/consts/roleUsers';

import AccountManagerDashboard from '../components/common/homeComponents/accountManagerDashboard/AccountManagerDashboard';
import ProgramRepresentativeDashboard from '../components/common/homeComponents/programRepresentativeDashboard/ProgramRepresentativeDashboard';
import SupplierAdministratorDashboard from '../components/common/homeComponents/supplierAdministratorDashboard/SupplierAdministratorDashboard';

/**
 * The dashboard page, will see Main as a template, use the same template for other pages
 * @returns The dashboard page ./
 */

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user, dataUser } = useContext(AuthContext);

  const { showDashboard } = useAppSelector((state) => state.role);

  useEffect(() => {
    dispatch(getJobsPendingApprove());
  }, [dataUser?.logged_buyer]);

  if (!showDashboard) {
    return <div>This role does not have permissions to view this content</div>;
  }

  if (user?.role === USER_ROLES.MspAdministrator) {
    return (
      <DashboardLoader>
        <MSPDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.ProgramManager) {
    return (
      <DashboardLoader>
        <ProgramManagerDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.MspFinance) {
    return (
      <DashboardLoader>
        <MSPFinance />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.ProgramRepresentative) {
    return (
      <DashboardLoader>
        <ProgramRepresentativeDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.BuyerAdministrator) {
    return (
      <DashboardLoader>
        <BuyerAdministratorDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.HiringManager) {
    return (
      <DashboardLoader>
        <HiringManagerDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.BuyerFinance) {
    return (
      <DashboardLoader>
        <BuyerFinanceDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.Delegate) {
    return (
      <DashboardLoader>
        <DelegateDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.Approver) {
    return (
      <DashboardLoader>
        <ApproverDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.Recruiter) {
    return (
      <DashboardLoader>
        <RecruiterDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.SupplierAdministrator) {
    return (
      <DashboardLoader>
        <SupplierAdministratorDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.AccountManager) {
    return (
      <DashboardLoader>
        <AccountManagerDashboard />
      </DashboardLoader>
    );
  }

  if (user?.role === USER_ROLES.SupplierFinance) {
    return (
      <DashboardLoader>
        <SupplierFinanceDashboard />
      </DashboardLoader>
    );
  }

  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default Dashboard;
