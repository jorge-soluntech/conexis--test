import type { GetServerSideProps } from 'next';

/**
 * The T&E page, will see Main as a template, use the same template for other pages
 * @returns The T&E page ./home/t&e/
 */

const TyE = () => {
  return <div>T&E</div>;
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

export default TyE;
