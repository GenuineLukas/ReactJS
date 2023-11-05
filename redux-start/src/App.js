import React from 'react';
import {useSelector} from 'react-redux';
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from './components/Counter';
import UserProfile from "./components/UserProfile";


function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
      <React.Fragment>
        <Header/>
          {!isAuthenticated && <Auth/>}
        <Counter/>
      </React.Fragment>
  );
}

export default App;
