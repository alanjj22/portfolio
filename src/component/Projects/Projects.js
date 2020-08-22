import React, { Component } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard'

class Projects extends Component {
    render() {
        return (
            <div className="project-main">
                <div className="project">
                    <ProjectCard Heading="Project name"  Details="project details"/>
                    <ProjectCard Heading="Project name"  Details="project details"/>
                    <ProjectCard Heading="Project name"  Details="project details"/>
                </div>
                <div className="project-heading">Projects</div>
            </div>
            
        )
    } 
}
export default Projects
