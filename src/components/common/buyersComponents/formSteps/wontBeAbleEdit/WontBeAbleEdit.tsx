import locales from '@/locales/en/en.json';

import styles from './WontBeAbleEdit.module.scss';

const {
  buyers: { firstStep },
} = locales;

const WontBeAbleEdit = () => (
  <div className={styles.cannot_edited}>
    <div className={`${styles.info_icon}`}>.</div>
    <div className={`${styles.info_text}`}>{firstStep.wontBeAbleEdit}</div>
  </div>
);

export default WontBeAbleEdit;
