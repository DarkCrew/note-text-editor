/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import deleteImage from '../../assets/image/delete.png';
import editImage from '../../assets/image/edit.png';

import styles from './Note.module.scss';

type Props = {
  id: number;
  title: string;
  deleteNote: (id: number) => void;
  editNode: (id: number, result: string) => void;
};

const Note = ({ id, title, deleteNote, editNode }: Props): ReactElement => {
  const changeTitle = (): void => {
    const result = prompt('Change your note', title);
    if (result !== title) {
      editNode(id, String(result));
    }
  };

  return (
    <div className={styles.note}>
      <p className={styles.title}>Note</p>
      <p>{title}</p>
      <div className={styles.menu}>
        <img src={editImage} alt="edit" onClick={changeTitle} />
        <img
          src={deleteImage}
          alt="delete"
          onClick={(): void => {
            deleteNote(id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
