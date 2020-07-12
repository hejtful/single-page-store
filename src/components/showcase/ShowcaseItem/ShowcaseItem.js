import React from 'react';

import { locals } from 'locals';

import styles from './ShowcaseItem.module.css';

export const ShowcaseItem = ({
  id,
  title,
  price,
  image,
  description,
  onAdd,
}) => {
  function handleAdd() {
    onAdd(id);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={`${title} product`} />
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.titleWrapper}>
          <h4 className={styles.title}>{title}</h4>
          <span>{price}$</span>
        </div>

        <p className={styles.description}>{description}</p>

        <button type="button" onClick={handleAdd}>
          {locals.showcase.add_to_order}
        </button>
      </div>
    </div>
  );
};
