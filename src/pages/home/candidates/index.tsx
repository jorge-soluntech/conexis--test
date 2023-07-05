import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import type { ICandidates } from '@/components/common/candidatesComponents/candidates/ICandidates';
import useCandidates from '@/components/common/candidatesComponents/useCandidatesData';
import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';

const Candidates = dynamic(
  () =>
    import('@/components/common/candidatesComponents/candidates/Candidates'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * Represents a component that displays the candidates.
 * @returns The candidates main page
 */
const CandidatesPage = () => {
  return (
    <TablePageLoader<ICandidates.IProps> {...{ useGetData: useCandidates }}>
      {({
        currentUserRoleName,
        allCandidates,
        filteredData,
        handleSearch,
        infoCandidate,
        loading,
        searchText,
      }) => {
        return (
          <Candidates
            {...{
              currentUserRoleName,
              allCandidates,
              filteredData,
              handleSearch,
              infoCandidate,
              loading,
              searchText,
            }}
          />
        );
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

export default CandidatesPage;
