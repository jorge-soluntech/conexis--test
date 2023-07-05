import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import PageNotFound from '@/components/common/pageNotFound/PageNotFound';

/**
 * Returns 404 page
 * @returns custom 404 page
 */

const Custom404 = () => {
  const { user } = useContext(AuthContext);

  return user ? <PageNotFound type={'in'} /> : <PageNotFound type={'out'} />;
};

export default Custom404;
