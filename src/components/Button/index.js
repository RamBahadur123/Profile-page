import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class index extends Component {
    render() {
        return (
            <div>
                <Button color="success">Contact me</Button>
                <NavLink to="/Contactme">Home</NavLink>
            </div>
        );
    }
}

export default index;