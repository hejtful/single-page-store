import React from 'react';

import styles from './Column.module.css';

export const Column = ({ children }) => (
  <section className={styles.column}>{children}</section>
);
