import React from 'react'
import './header.css'
import Button from '../Button'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='home'>
      <div className="header__container">
          <div>
            <h5>Hi, My name is <b> Exequiel </b> </h5>
            <h1>Website developer <br/>
            & UX/UI designer</h1>
            <div className="slogantext">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.8872 6.57872L11.5799 6.03483L9.11488 0.227539L6.64985 6.04361L0.342529 6.57872L5.13223 10.728L3.69357 16.895L9.11488 13.6229L14.5362 16.895L13.1063 10.728L17.8872 6.57872ZM9.11488 11.9825L5.81648 13.9738L6.69371 10.2192L3.78129 7.69281L7.62358 7.35946L9.11488 3.8242L10.615 7.36823L14.4572 7.70158L11.5448 10.228L12.4221 13.9826L9.11488 11.9825Z" fill="#00FF85"/>
            </svg>
            <p>Imagine, Design, Make It Real</p>
            </div>
          </div>

        <Button text="Let's Work Together" link="#contact"/>
        <HeaderSocial/>
      </div>


    </header>
  )
}

export default Header