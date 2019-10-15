import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return<footer>
            <a href="/schedule-test-flight">Scedule a Test Flight! No pilot's license required</a>
        </footer>; 
    }
}

export default Footer;