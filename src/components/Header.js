import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todo App (Class Components)</h1>
                <p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
            </header>
        )
    }
}

export default Header;