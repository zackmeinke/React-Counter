import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        const {year} = this.props;
        return (
            <div>
                    <footer>
                        &copy; {year} Foo Industries
                    </footer>
            </div>
        );
    }
}

export default Footer;