import React from 'react'
import './contact.css'
import Title from '../Title/Title'
import Button from '../Button'

const Contact = () => {
  return (
    <contact id="contact">
      <div className="contact__container">
        <Title paragraph="NEED A DESIGNER OR DEVELOPER? YOU GOT BOTH" heading="LET’S WORK
        " heading2="TOGETHER" />

        <form className='formulario' action="">
          <input type="text" name="name" required placeholder='Name'/>
          <br />
          <input type="email" name="email" required placeholder='Email'/>
          <br />
          <select name="interest" required id="">
            <option value="" disabled selected >What are you interested in?</option>
            <option value="short">Need help with a one-off project</option>
            <option value="middle">Looking for a long term partnership</option>
            <option value="long">Want to hire me full-time</option>
          </select>
          <br />
          <select name="interest" required id="">
            <option value="" disabled selected >What’s your budget?</option>
            <option value="short">$100 to $500</option>
            <option value="middle">$500 to $2000</option>
            <option value="middle">More than $2000</option>
          </select>
          <br />
          <textarea placeholder='Message' name="message" id="" cols="30" rows="10" required ></textarea>
        </form>
        <input type="submit" value="Send Message" className='btn-primary enviar'/>
      </div>
    </contact>
  )
}

export default Contact