import type { GetServerSideProps } from 'next';

/**
 * The Contracts page, will see Main as a template, use the same template for other pages
 * @returns The Contracts page ./home/contracts/
 */

const Contracts = () => {
  return <div>Contracts</div>;
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

export default Contracts;
