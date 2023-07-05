import type { GetServerSideProps } from 'next';

/**
 * The Approvals page, will see Main as a template, use the same template for other pages
 * @returns The Approvals page ./home/approvals/
 */

const Approvals = () => {
  return <div>Approvals</div>;
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

export default Approvals;
