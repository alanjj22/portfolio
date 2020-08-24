import React, { Component } from 'react'
import Profile from '../image/profile.JPG'
import './Home.css'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

class Home extends Component {
    render() {
        return (
            <div className="profile">
                <img src={Profile} alt="Profile_picture"/>
                <div className="profile-content">
                    <p>
                        React developer
                    </p>
                </div>
                <Skills />
                <Projects />
                <Contact />
            </div>
        )
    }
}
export default Home