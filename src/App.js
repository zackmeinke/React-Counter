import React, { Component } from 'react';
import Counter from './Counter';
import Footer from './Footer';
import Header from './Header';
import './App.css';
import CounterChild from './CounterChild';

class App extends Component {
  render() {
    const now = new Date();
    const currentYear = now.getFullYear();

    return (
      <div>
        <Header />
        <Counter />
        <Footer />
      </div>
      
    );
  }
}

export default App;
