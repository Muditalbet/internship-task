import React from 'react'
import logo from './logo.svg';
import './App.css';
import ContentList from './containers/ContentList'
import Bucket from './containers/Bucket'

function App() {
  

  
  return (
    <div>
      <h1>Content List:</h1>
      <ContentList />
      <hr></hr>
      <h1>Bucket:</h1>
      <Bucket />
    </div>
  );
}

export default App;
