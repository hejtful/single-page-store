import React from 'react';

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
            placeholder="Title"
            className={styles.formElement}
          />

          <input
            type="number"
            step="0.01"
            min="0.01"
            required
            name="price"
            placeholder="Price"
            className={styles.formElement}
          />
        </div>

        <input
          type="url"
          required
          name="image"
          placeholder="Image URL"
          className={styles.formElement}
        />

        <textarea
          required
          name="description"
          placeholder="Description"
          className={`${styles.formElement} ${styles.textarea}`}
        />

        <button type="submit" className={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};
