import { Typography } from 'antd';
import Image from 'next/image';
import type { FC } from 'react';

import useWindowDimensions from '@/components/hooks/useWindowDimension';
import { loginUI } from '@/consts';
import { TABLET_BREAKPOINT } from '@/consts/login_ui';

import Logotype from '../../logo/logotype';
import styles from './textIntro.module.scss';

const { Title, Paragraph } = Typography;

const TextIntro: FC = () => {
  const { width = 0 } = useWindowDimensions();
  return (
    <div className={styles.content_intro}>
      <Image
        className={styles.img_nasa}
        src="/assets/images/login_nasa.jpg"
        layout="fill"
        alt="nasa"
      />
      <div className={styles.black_filter} />
      <div className={styles.content_intro_filter} />
      <div className={styles.content_intro_main}>
        <Logotype src="/assets/icons/logo_conexis_2.svg" />
        <div className={styles.container_text_intro}>
          <Title style={{ marginTop: 0 }} level={3}>
            {width <= TABLET_BREAKPOINT
              ? loginUI.LOGIN_TEXT.title_intro_tablet
              : loginUI.LOGIN_TEXT.title_intro}
          </Title>
          <Paragraph className={styles.paragraph}>
            {loginUI.LOGIN_TEXT.subtitle_intro}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default TextIntro;
