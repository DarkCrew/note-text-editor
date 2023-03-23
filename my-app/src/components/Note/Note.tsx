import React, { ReactElement } from 'react';

import deleteImage from '../../assets/image/delete.png';
import editImage from '../../assets/image/edit.png';

import styles from './Note.module.scss';

const Note = (): ReactElement => {
  return (
    <div className={styles.note}>
      <p className={styles.title}>Note</p>
      <p>This text about my first dream</p>
      <div className={styles.menu}>
        <img src={editImage} alt="edit" />
        <img src={deleteImage} alt="delete" />
      </div>
    </div>
  );
};

export default Note;
