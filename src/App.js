import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'
import Detail from './components/Detail'
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
}

export default App;
