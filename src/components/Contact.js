import React, {useState} from 'react'

//form to email import
import emailjs from 'emailjs-com'

//import icons 
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
    const [message, setMessage] = useState({name: '', email: '', body: ''})
   


    const handleInput = (e) => {
        setMessage({[e.target.name]:[e.target.value]})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

        emailjs.sendForm(
            'gtam_gmail',
            'gtam_portfolio_message',
            e.target,
            'user_DgvDS2sih1Gp7DkE3UzcJ'
        )
        .then(
            console.log('success')
        )
        .catch(err => {
            console.error('Email error', err)
        })
        setMessage({name: '', email: '', body: ''})
    }
        
 
    return (
        <div id='contact-form'>
            <form onSubmit={(e) => handleSubmit(e)} >
                <input className = 'form-control' type='text' placeholder='NAME' name = 'name' value={message.name} onChange={(e) => handleInput(e)} required></input>
                <input className = 'form-control' type='email' placeholder='EMAIL' name = 'email' value={message.email} onChange={(e) => handleInput(e)} required></input>
                {/* <select>
                    <option>lah de dah</option>
                    <option>Mentor</option>
                    <option>lah de dah</option>
                </select> */}
                <textarea rows = '5' cols = '50' placeholder='MESSAGE' name = 'body' value={message.body} onChange={(e) => handleInput(e)} required></textarea>

                <button className='btn btn-primary send-button' id='submit' type='submit' value='SEND'>
                    <div className="button">
                    <FaPaperPlane /><span class='send-text'>SEND</span>
                    </div>
                </button>
            </form> 

        </div>
            
    )
}

export default Contact
