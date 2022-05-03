import React from 'react';
import User from './components/User';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/*<h1>App Component</h1>*/}
      {/*<User data={{name:'istiaque ahmed', age:32}}/>*/}
      <HeaderContainer/>
       <HomeContainer/>
    </div>
  );
}

export default App;
