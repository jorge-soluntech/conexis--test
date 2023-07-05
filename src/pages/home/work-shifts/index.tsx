import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';
import useWorkShifts from '@/components/common/workShiftsComponents/useWorkShiftsData';
import type { IWorkShifts } from '@/components/common/workShiftsComponents/workShifts/IWorkShifts';

const WorkShiftsComponent = dynamic(
  () =>
    import('@/components/common/workShiftsComponents/workShifts/WorkShifts'),
  {
    loading: () => <FallbackComponent />,
  }
);

/**
 * Represents a component that displays the work shifts.
 * @returns The work shifts page
 */
const WorkShift = () => {
  return (
    <TablePageLoader<IWorkShifts.IProps> {...{ useGetData: useWorkShifts }}>
      {({ allWorkShifts, loading }) => {
        return <WorkShiftsComponent {...{ allWorkShifts, loading }} />;
      }}
    </TablePageLoader>
  );
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

export default WorkShift;
