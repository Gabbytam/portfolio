import React from 'react'
import { FaPaperPlane, FaGithub, FaMapMarked, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'

import '../css/contact.css'

function ContactSection() {
    return (
        <section id="contactSection">
            <h1 className="section-header">CONTACT</h1>
            <div className="contact-wrapper">

                {/* contact page left */}
                <form id="contact-form" className="form-horizontal" role="form">
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
                        </div>
                    </div>

                    <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                    <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                        <div className="button">
                        {/* <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span> */}
                        <i><FaPaperPlane /></i><span className="send-text">SEND</span>
                        
                        </div>
                    </button>
                </form>

                {/* contact page right */}
                <div className="direct-contact-container">
                    <ul className="contact-list">
                        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place"><FaMapMarked /> New York, NY</span></i></li>
                        
                        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><FaPhone />(760) 710-7856</span></i></li>
                        
                        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email"><FaEnvelope />gtam2@fordham.edu</a></span></i></li> 
                    </ul>

                    <hr></hr>

                    <ul className="social-media-list">
                        <li><a href="#" target="_blank" className="contact-icon">
                            <i aria-hidden="true"><FaGithub /></i></a>
                        </li>
                        <li><a href="#" target="_blank" className="contact-icon">
                            <i className="fa fa-twitter" aria-hidden="true"><FaLinkedin /></i></a>
                        </li>
                        <li><a href="#" target="_blank" className="contact-icon">
                            <i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                    </ul>

                    <hr></hr>

                </div>
            </div>

        </section>
    )
}

export default ContactSection
