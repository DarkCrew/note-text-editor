import React, { ReactElement } from 'react';
import HomePage from 'pages/HomePage/HomePage';

import Header from 'components/Header/Header';

import './App.css';
import './styles/index.scss';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
