import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';

const AttachmentSuppliers = dynamic(
  () =>
    import(
      '@/components/common/supplierComponents/attachmentSuppliers/AttachmentSuppliers'
    ),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The AttachmentSupplier page, will see Main as a template, use the same template for other pages
 * @returns The AttachmentSupplier page ./
 */

type Props = {
  idSupplier: string;
};

const AttachmentSupplier: NextPage<Props> = ({ idSupplier }) => {
  return <AttachmentSuppliers idSupplier={idSupplier} />;
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  const { supplierId } = query;

  if (supplierId && req.cookies.token) {
    return {
      props: {
        idSupplier: supplierId,
      },
    };
  }

  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  };
};

export default AttachmentSupplier;
