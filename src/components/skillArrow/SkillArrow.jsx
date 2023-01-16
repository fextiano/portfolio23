import React from 'react'
import Style from './skillarrow.module.css'

const SkillArrow = ({skillname}) => {
  return (
    <div className={Style.hability}>
      <svg width="20" height="22" viewBox="0 0 22 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.8896 12.4114L0.566525 24.7223L0.566525 0.100544L21.8896 12.4114Z" fill="currentColor"/>
      </svg>
      <p>{skillname}</p>
    </div>
  )
}

export default SkillArrow