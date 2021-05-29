import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Sidebar from './Sidebar/Sidebar.js';
import Feed from './Feed/Feed.js';
import Widgets from './Widgets/Widgets.js';
import Login from './Login/Login.js';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (<Login/>) : (
      <>
        <Header/>
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/> 
        </div>
      </>
      )}

    </div>
  );
}

export default App;
