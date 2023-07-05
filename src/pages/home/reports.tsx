import type { GetServerSideProps } from 'next';

/**
 * The Reports page, will see Main as a template, use the same template for other pages
 * @returns The Reports page ./home/reports/
 */

const Reports = () => {
  return <div>Reports</div>;
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

export default Reports;
