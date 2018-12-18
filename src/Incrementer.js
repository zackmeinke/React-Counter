import React, { Component } from 'react';

class Incrementer extends Component {
    render() {
        const {increase} = this.props;
        return (
            <div>
                <button onClick={increase}>Increase</button>
            </div>
        );
    }
}

export default Incrementer;