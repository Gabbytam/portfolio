import React from 'react';

//react router import
import {Route} from 'react-router-dom';

// Components imports
import GitHub from "./components/GitHub";
import Home from './components/Home'
import LayoutM from "./components/common/LayoutM";
import Layout from './components/common/Layout'
// import About from './components/About'
// import Projects from './components/Projects'
// import Resume from './components/Resume'
import Intro from './components/Intro'
import Nav from './components/common/Nav'

// CSS imports
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      {/* <Intro /> */}
      <Layout>
        <Route exact path='/' component={Home}/>
        {/* <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/resume" component={Resume}></Route> */}
      </Layout>
    </div>
  );
};

export default App;
