import React, { Dispatch, ReactElement, SetStateAction } from 'react';

import styles from './Header.module.scss';

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Header = ({ search, setSearch }: Props): ReactElement => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <p className={styles.logo}>Note text editor</p>
          <input
            type="text"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setSearch(e.target.value);
            }}
          />
          <p className={styles.title}>Test project</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
