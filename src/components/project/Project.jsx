import React from 'react'
import Style from './project.module.css'

const Project = ({year, title}) => {
  return (
  <div className={Style.project__card}>
    <div className={Style.project__card__title}>
      <p>{year}</p>
      <h2>{title}</h2>
    </div>
    <a href="">Read More</a>
  </div>
  )
}

export default Project