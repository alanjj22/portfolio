import React from 'react'
import './Projects.css'

const ProjectCard = (props) => {
    return (
        <div>
            <div className="project-card">
                <h2>{props.Heading}</h2>
                <div className="project-detail">
                    {props.Details}
                </div>
            </div>
        </div>
    )
}
export default  ProjectCard