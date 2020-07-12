import React from 'react';

import styles from './Title.module.css';

export const Title = ({ children }) => (
  <h2 className={styles.title}>{children}</h2>
);
