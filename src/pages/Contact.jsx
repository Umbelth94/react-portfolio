//Need Name, email, message form
import { useState } from 'react'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (!e.target.value.trim()) {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!/^\S+@\S+\.\S+$/.test(e.target.value)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    };

    const handleBlur = (e) => {
        if (!e.target.value.trim() && e.target.id === 'name') {
            setNameError('Name is required');
        } else if (!/\S+@\S+\.\S+/.test(e.target.value) && e.target.id === 'email') {
            setEmailError('Invalid email address');
        }
    };

    return (
        <div className = 'container-fluid content'>
            <h2>Contact Me</h2>
            <form>
                <div className= 'form-group'>
                    <label htmlFor='name'>Full Name</label>
                    <input 
                        type='text' className="form-control" id='name' 
                        aria-describedby = 'Name input'
                        value = {name}
                        onChange = {handleNameChange}
                        onBlur = {handleBlur} 
                    />
                    {nameError && <div className="error">{nameError}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        aria-describedby='Name input'
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleBlur}
                    />
                    {emailError && <div className="error">{emailError}</div>}
                </div>
                <div className='form-group'>
                    <label htmlFor="textArea">Message: </label>
                    <textarea
                        className='form-control'
                        name='message'
                        id='message'
                        cols='30'
                        rows='10'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
            </form>
        </div>
    )
}