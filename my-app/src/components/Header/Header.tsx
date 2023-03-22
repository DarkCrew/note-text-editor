import React, { ReactElement } from 'react';

import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <p>Note text editor</p>
          <input type="text" />
          <p>Test project</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
