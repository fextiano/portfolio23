import React from 'react'

const Button = ({text, link}) => {
  return (
    <div className="cta">
      <a href={link} className='btn btn-primary' >{text}</a>
    </div>
    )
}

export default Button