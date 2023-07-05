import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';
import { FormPageLoader } from '@/components/common/loaders';
import useCreateFormLoader from '@/components/common/loaders/FormPageLoader/useCreateFormLoader';
import { GL_CODES_TEXT } from '@/consts/gl_codes_ui';

const FormGlCodesCreate = dynamic(
  () => import('@/components/common/glCodesComponents/create/FormGlCodeCreate'),
  {
    loading: () => <FallbackComponent />,
    ssr: true,
  }
);

/**
 * The gl code create page, will see Main as a template, use the same template for other pages
 * @returns The gl code create page ./home/gl-codes/create
 */

const GlCodesCreate = () => {
  return (
    <FormPageLoader {...{ useGetData: useCreateFormLoader }}>
      <FormGlCodesCreate
        titleForm={GL_CODES_TEXT.title_form_gl_codes_creation}
      />
    </FormPageLoader>
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

export default GlCodesCreate;
