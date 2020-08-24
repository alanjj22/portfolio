import React, { Component } from 'react'
import './Skills.css'

class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="skill-head">Skills</div>
                <div className="skill-content">
                <div className="skill-type">
                        <h2>Web Development</h2>
                        <ul className="skill-list">
                            <li>React JS</li>
                            <li>HTML/CSS</li>
                            <li>JS</li>
                        </ul>
                    </div>
                    <div className="skill-type">
                        <h2>Programming</h2>
                        <ul className="skill-list">
                            <li>CPP</li>
                            <li>C</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills