import type { GetServerSideProps } from 'next';

/**
 * The Imports page, will see Main as a template, use the same template for other pages
 * @returns The Imports page ./home/imports/
 */

const Imports = () => {
  return <div>Imports</div>;
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

export default Imports;
