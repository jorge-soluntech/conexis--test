import Image from 'next/image';
import type { FC } from 'react';

import { MOBILE_BREAKPOINT } from '@/consts/login_ui';

import useWindowDimensions from '../../hooks/useWindowDimension';
import type { ILogotype } from './ILogotype';
import classStyle from './logotype.module.scss';

/**
 * Returns the logo and title element
 *
 * @param src - The src of icon
 * @param title - The string of title
 * @param colorTitle the color of the title
 * @param widthLogo - The width of the icon
 * @param heightLogo - The height of the icon
 * @returns The the logo and title
 */

const Logotype: FC<ILogotype.IProps> = ({
  src = '/assets/icons/logo_conexis.svg',
  widthLogo = 63.12,
  heightLogo = 57.05,
}) => {
  const { width = 0 } = useWindowDimensions();

  return (
    <div className={classStyle.logo}>
      <Image
        src={src}
        alt="logo"
        width={widthLogo}
        height={heightLogo}
        priority
      />
      {width <= MOBILE_BREAKPOINT ? (
        <Image
          src={'/assets/icons/conexis_title_phone.svg'}
          alt="logo"
          width={89.02}
          height={17.99}
          priority
        />
      ) : (
        <div style={{ marginLeft: '14.82px' }}>
          <Image
            src={'/assets/icons/conexis_title.svg'}
            alt="title"
            width={102}
            height={20}
          />
        </div>
      )}
    </div>
  );
};

export const LogoTypeWithMargin = () => {
  const { width = 0 } = useWindowDimensions();
  return width <= MOBILE_BREAKPOINT ? (
    <div style={{ marginTop: 20, marginBottom: 20 }}>
      <Logotype src="/assets/icons/logo_conexis.svg" />
    </div>
  ) : (
    <></>
  );
};

export default Logotype;
