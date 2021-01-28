import React, {useState} from 'react'

//form to email import
import emailjs from 'emailjs-com'

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
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='NAME' name = 'name' value={message.name} onChange={(e) => handleInput(e)}></input>
                <input type='email' placeholder='EMAIL' name = 'email' value={message.email} onChange={(e) => handleInput(e)}></input>
                {/* <select>
                    <option>lah de dah</option>
                    <option>Mentor</option>
                    <option>lah de dah</option>
                </select> */}
                <textarea rows = '5' cols = '50' placeholder='MESSAGE' name = 'body' value={message.body} onChange={(e) => handleInput(e)}></textarea>
                <button type='submit'>Send</button>
            </form> 

        </div>
            
    )
}

export default Contact
