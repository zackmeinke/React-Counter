import React, { Component } from 'react';
import CounterChild from './CounterChild';
import Decrament from './Decrament';
import Incrementer from './Incrementer';
import CounterDisplay from './CounterDisplay';
import './Counter.css'

class Counter extends Component {
    constructor(){
        super();
        this.state = { current: 0 };
    }
    increment = () => {
        this.setState({current: this.state.current + 1})
    }
    decrament = () => {
        this.setState({current: this.state.current - 1})
    }
    render() 
    {
        return (
            <CounterChild 
                decrament = {this.decrament}
                current = {this.state.current}
                increment = {this.increment}
            />
        );
    }
}

export default Counter;