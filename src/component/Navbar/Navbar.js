import React, { Component } from 'react'
import '../Navbar/Navbar.css'
import {Link} from 'react-router-dom'


class Navbar extends Component {

    state = {
        isOpen: false
    }

    showNav = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div className="main">
                <div className="navbar-logo-toggle">
                    <div className="home">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="toggle-icon" onClick={this.showNav} >
                        <div className="toggle-bar"></div>
                        <div className="toggle-bar"></div>
                        <div className="toggle-bar"></div>
                    </div>
                </div>
                <ul className = {this.state.isOpen ? 'showNav' : 'noNav'}>
                    <li className="showNavList" onClick={this.showNav}><Link to="/About">About</Link></li>
                    <li className="showNavList" onClick={this.showNav}><Link to="/Skills">Skills</Link></li>
                    <li className="showNavList" onClick={this.showNav}><Link to="/Projects">Projects</Link></li>
                    <li className="showNavList" onClick={this.showNav}><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;