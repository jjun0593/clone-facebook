import React from 'react';
import './App.css';

import { useStateValue } from './StateProvider';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';
import Login from './components/Login';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (

        <Login />

      ) : (
          <div>

            < Header />

            <div div className="app__body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>
        )
      }
    </div >
  );
}

export default App;
