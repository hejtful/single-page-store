import React from 'react';

import { locals } from 'locals';

import styles from './InventoryItem.module.css';

export const InventoryItem = ({
  id,
  title,
  price,
  image,
  description,
  onChange,
  onRemove,
}) => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  const handleChange = (field) => (event) => {
    onChange(id, title, field, event.target.value);
  };

  function handleRemove() {
    onRemove(id, title);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupInline}>
          <input
            type="text"
            required
            value={title}
            placeholder={locals.inventory.title_placeholder}
            onChange={handleChange('title')}
            className={styles.formElement}
          />

          <input
            type="number"
            step="0.01"
            min="0.01"
            required
            value={price}
            placeholder={locals.inventory.price_placeholder}
            onChange={handleChange('price')}
            className={styles.formElement}
          />
        </div>

        <input
          type="url"
          required
          value={image}
          placeholder={locals.inventory.image_placeholder}
          onChange={handleChange('image')}
          className={styles.formElement}
        />

        <textarea
          required
          value={description}
          placeholder={locals.inventory.description_placeholder}
          onChange={handleChange('description')}
          className={`${styles.formElement} ${styles.textarea}`}
        />

        <button
          type="button"
          onClick={handleRemove}
          className={`${styles.button} danger`}
        >
          {locals.inventory.remove_product}
        </button>
      </form>
    </div>
  );
};
