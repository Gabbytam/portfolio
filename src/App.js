import React from 'react';

//react router import
import {Route} from 'react-router-dom';

// Components imports
import Home from './components/Home'
import Layout from './components/common/Layout'


// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Intro /> */}
      <Layout>
        <Route exact path='/' component={Home}/>
      </Layout>
    </div>
  );
};

export default App;
