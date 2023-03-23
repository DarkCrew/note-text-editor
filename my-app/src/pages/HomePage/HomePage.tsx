/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ChangeEvent, ReactElement } from 'react';

import Note from '../../components/Note/Note';

import styles from './HomePage.module.scss';

type dataNote = {
  id: number;
  title: string;
};

const HomePage = (): ReactElement => {
  const [data, setData] = React.useState<dataNote[]>([]);
  React.useEffect(() => {
    if (localStorage.getItem('notedata') !== null) {
      const localStorageData: dataNote[] = JSON.parse(localStorage.getItem('notedata') as string);
      setData(localStorageData);
    }
  }, []);

  React.useEffect(() => {
    if (data.length !== 0) {
      localStorage.setItem('notedata', JSON.stringify(data));
    }
  }, [data]);

  const [noteCreate, setNoteCreate] = React.useState('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setNoteCreate(event.target.value);
  };

  const createNote = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    if (noteCreate !== '') {
      const newNote = { id: +Date.now(), title: noteCreate };
      setData([...data, newNote]);
      setNoteCreate('');
    }
  };

  const deleteNote = (id: number): void => {
    data.forEach((elem, index) => {
      if (elem.id === id) {
        data.splice(index, 1);
      }
    });
    setData([...data]);
  };

  const editNode = (id: number, result: string): void => {
    data.forEach((elem) => {
      if (elem.id === id) {
        elem.title = result;
      }
    });
    setData([...data]);
  };

  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.taskContainer}>
            <p>Create your note</p>
            <form>
              <input type="text" name="note" value={noteCreate} onChange={handleInputChange} />
              <input type="submit" value="Create" onClick={createNote} />
            </form>
          </div>
          <div className={styles.mainContainer}>
            {data.map((elem) => (
              <Note id={elem.id} title={elem.title} deleteNote={deleteNote} editNode={editNode} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
