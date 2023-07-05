import '../styles/global.scss';
import '../styles/componentScoped.scss';

import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

import { AuthProvider } from '@/application/authContext';
import { store } from '@/application/store';
import FallbackComponent from '@/components/common/fallbackComponent/FallbackComponent';

const LayoutHome = dynamic(
  () => import('@/components/layouts/layoutHome/layoutHome'),
  {
    loading: () => <FallbackComponent />,
    ssr: false,
  }
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Provider store={store}>
      <LayoutHome>
        <Component {...pageProps} />
      </LayoutHome>
    </Provider>
  </AuthProvider>
);

export default MyApp;
