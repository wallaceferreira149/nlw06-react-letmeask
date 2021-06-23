import React, { createContext } from 'react';
import './services/firebase';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/global.scss';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
    </BrowserRouter>
  );
};

export default App;
