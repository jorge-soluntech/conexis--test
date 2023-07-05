import type { GetServerSideProps } from 'next';

const Index = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  if (req.cookies.token) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
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

export default Index;
