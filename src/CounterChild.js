import React, { Component } from 'react';
import Decrament from './Decrament';
import Incrementer from './Incrementer';
import CounterDisplay from './CounterDisplay';
import './Counter.css'
import Counter from './Counter';

class CounterChild extends Component {
    render() {
        const {decrament, current, increment,} = this.props
        return (
            <div id="counter">
                <Decrament decrease = {decrament}/>
                <CounterDisplay current={current}/>
                <Incrementer increase = {increment}/>
            </div>
        );
    }
}

export default CounterChild;