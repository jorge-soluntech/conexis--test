import Image from 'next/image';
import type { FC } from 'react';

import type { ILogoSider } from './ILogoSider';
import classStyle from './logoSider.module.scss';

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

const LogoSider: FC<ILogoSider.IProps> = ({
  src = '/assets/icons/logo_conexis.svg',
  widthLogo = 63.12,
  heightLogo = 57.05,
}) => {
  return (
    <div className={classStyle.logo}>
      <Image
        src={src}
        alt="logo"
        width={widthLogo}
        height={heightLogo}
        priority
      />

      <Image
        src={'/assets/icons/conexis_title_phone.svg'}
        alt="logo"
        width={89.02}
        height={17.99}
        priority
      />
    </div>
  );
};

export default LogoSider;
