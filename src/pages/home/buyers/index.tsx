import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import type { IBuyerComponent } from '@/components/common/buyersComponents/IBuyerComponent';
import useGetBuyerData from '@/components/common/buyersComponents/useGetBuyerData';
import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { TablePageLoader } from '@/components/common/loaders';

const BuyerComponent = dynamic(
  () => import('@/components/common/buyersComponents/BuyerComponent'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);
/**
 * Buyersmain page
 *
 * @returns The Buyers main page
 */

const Buyers = () => {
  return (
    <TablePageLoader<IBuyerComponent.IProps>
      {...{ useGetData: useGetBuyerData }}
    >
      {({ loading, dataTable, showError, setShowError, messageError }) => {
        return (
          <BuyerComponent
            {...{
              loading,
              dataTable,
              showError,
              setShowError,
              messageError,
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

export default Buyers;
