import React from 'react';

import { locals } from 'locals';
import { serializeFormData } from 'utility/form/serializeFormData.js';

import styles from './InventoryItemNew.module.css';

export const InventoryItemNew = ({ onSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(serializeFormData(event.target));

    event.target.reset();
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupInline}>
          <input
            type="text"
            required
            name="title"
            placeholder={locals.inventory.title_placeholder}
            className={styles.formElement}
          />

          <input
            type="number"
            step="0.01"
            min="0.01"
            required
            name="price"
            placeholder={locals.inventory.price_placeholder}
            className={styles.formElement}
          />
        </div>

        <input
          type="url"
          required
          name="image"
          placeholder={locals.inventory.image_placeholder}
          className={styles.formElement}
        />

        <textarea
          required
          name="description"
          placeholder={locals.inventory.description_placeholder}
          className={`${styles.formElement} ${styles.textarea}`}
        />

        <button type="submit" className={styles.button}>
          {locals.inventory.add_product}
        </button>
      </form>
    </div>
  );
};
