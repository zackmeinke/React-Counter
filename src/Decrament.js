import React, { Component } from 'react';

class Decrament extends Component {
    render() {
        const {decrease} = this.props;
        return (
            <div>
                <button onClick={decrease}>Decrease</button>
            </div>
        );
    }
}

export default Decrament;