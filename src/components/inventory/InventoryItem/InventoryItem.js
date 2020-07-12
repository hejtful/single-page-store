import React from 'react';

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
    onChange(id, field, event.target.value);
  };

  function handleRemove() {
    onRemove(id);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroupInline}>
          <input
            type="text"
            required
            value={title}
            placeholder="Title"
            onChange={handleChange('title')}
            className={styles.formElement}
          />

          <input
            type="number"
            step="0.01"
            min="0.01"
            required
            value={price}
            placeholder="Price"
            onChange={handleChange('price')}
            className={styles.formElement}
          />
        </div>

        <input
          type="url"
          required
          value={image}
          placeholder="Image URL"
          onChange={handleChange('image')}
          className={styles.formElement}
        />

        <textarea
          required
          value={description}
          placeholder="Description"
          onChange={handleChange('description')}
          className={`${styles.formElement} ${styles.textarea}`}
        />

        <button type="button" onClick={handleRemove} className={styles.button}>
          Remove Product
        </button>
      </form>
    </div>
  );
};
