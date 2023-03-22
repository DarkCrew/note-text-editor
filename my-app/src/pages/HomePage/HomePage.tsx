import React, { ReactElement } from 'react';

import styles from './HomePage.module.scss';

const HomePage = (): ReactElement => {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <p>HomePage</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
