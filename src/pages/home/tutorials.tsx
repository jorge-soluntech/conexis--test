import type { GetServerSideProps } from 'next';

/**
 * The Tutorials page, will see Main as a template, use the same template for other pages
 * @returns The Tutorials page ./home/tutorials/
 */

const Tutorials = () => {
  return <div>Tutorials</div>;
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

export default Tutorials;
