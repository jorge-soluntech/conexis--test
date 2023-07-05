import type { FC } from 'react';
import React from 'react';

import styles from './ExampleComponent.module.scss';
import type { IExampleComponent } from './IExampleComponent';

/**
 * Returns the dom element h1 with the title
 *
 * @param title - The string of title
 * @returns The title of the example component
 */

const ExampleComponentTitle: FC<IExampleComponent.IProps> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default ExampleComponentTitle;
