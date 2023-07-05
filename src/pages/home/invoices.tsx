import type { GetServerSideProps } from 'next';

/**
 * The Invoices page, will see Main as a template, use the same template for other pages
 * @returns The Invoices page ./home/invoices/
 */

const Invoices = () => {
  return <div>Invoices</div>;
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

export default Invoices;
