import { useContext } from 'react';

import { AuthContext } from '@/application/authContext';
import locales from '@/locales/en/en.json';

import styles from './WorkWeekDefinitionComponent.module.scss';

/**
 * Represents a work week definition component that displays the title and value of a work week.
 *
 * @returns {JSX.Element} The JSX element that represents the work week definition component.
 */
const WorkWeekDefinition = (): JSX.Element => {
  const { dataUser } = useContext(AuthContext);
  const {
    components: { workWeekDefinition },
  } = locales;

  return (
    <div className={styles.work_week}>
      <span className={styles.work_week__title}>
        {workWeekDefinition.title}
      </span>
      <span className={styles.work_week__value}>
        {dataUser?.work_week_definition === 'M-S'
          ? workWeekDefinition.ms
          : workWeekDefinition.ss}
      </span>
    </div>
  );
};

export default WorkWeekDefinition;
