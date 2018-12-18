import React, { Component } from 'react';
import Counter from './Counter';
import Footer from './Footer';
import Header from './Header';
import './App.css';

class App extends Component {
  render() {
    const now = new Date();
    const currentYear = now.getFullYear();

    return (
      <div>
         <Header />
         <Counter />
         <Footer year={currentYear}/> 
      </div>
    );
  }
}

export default App;
