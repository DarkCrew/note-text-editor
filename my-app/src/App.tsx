import React, { ReactElement } from 'react';
import HomePage from 'pages/HomePage/HomePage';

import Header from 'components/Header/Header';

import './App.css';
import './styles/index.scss';

const App = (): ReactElement => {
  const [search, setSearch] = React.useState('');
  return (
    <div className="App">
      <Header search={search} setSearch={setSearch} />
      <HomePage search={search} />
    </div>
  );
};

export default App;
