/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ReactElement } from 'react';

import Note from '../../components/Note/Note';

import styles from './HomePage.module.scss';

const createNote = (): void => {
  console.log('create Note!!');
};

const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.taskContainer}>
            <p>Create your note</p>
            <input type="text" />
            <button type="button" onClick={createNote}>
              Create
            </button>
          </div>
          <div className={styles.mainContainer}>
            {[1, 2, 3].map((elem) => (
              <Note />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
