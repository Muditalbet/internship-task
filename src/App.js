import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContentList from './containers/ContentList'
import Bucket from './containers/Bucket'
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'
import Detail from './components/Detail'
// import About from './components/About'
function App() {
  
  return(
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/cart' component={Cart} exact />
          <Route path='/about/:id' component={Detail} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  )
  
  // return (
  //   <div>
  //     <h1>Content List:</h1>
  //     <ContentList />
  //     <hr></hr>
  //     <h1>Bucket:</h1>
  //     <Bucket />
  //   </div>
  // );
}

export default App;
