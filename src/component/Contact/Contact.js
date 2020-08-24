import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-main">
            <div className="contact-heading">Find me here</div>
            <div className="contact-icons">
                <a href="/Home"><i className="icon-facebook contact-icon"></i></a>
                <a href="/Home"><i className="icon-instagram contact-icon"></i></a>
                <a href="/Home"><i className="icon-github contact-icon"></i></a>
            </div>
        </div>
    )
}
export default Contact