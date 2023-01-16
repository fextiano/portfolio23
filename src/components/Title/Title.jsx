import React from 'react'
import Style from './title.module.css'

const Title = ({paragraph, heading, heading2}) => {
  return (
      <div className={Style.main__title}>
        <h4>{paragraph}</h4>
        <h1>{heading}</h1>
        <h1>{heading2}</h1>
      </div>
  )
}

export default Title