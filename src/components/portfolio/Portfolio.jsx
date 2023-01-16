import React from 'react'
import './portfolio.css'
import Title from '../Title/Title'
import Project from '../project/Project'

const Portfolio = () => {
  return (
    <portfolio id="portfolio">
      <div className="portfolio__container">

        <div className="page__position">
          <svg className='tr1' width="15" height="18" viewBox="0 0 15 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="currentColor"/>
          </svg>
          <svg className='tr2' width="15" height="18" viewBox="0 0 15 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="currentColor"/>
          </svg>
          <svg className='tr3' width="15" height="18" viewBox="0 0 15 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9L0 17.6603L0 0.339746L15 9Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="projects__container">
        <Title paragraph="MOST RECENT CREATIONS" heading="PORTFOLIO" />

          <div className='projects__content__container'>
            <Project year="2022" title="CHANDON CONCEPT WEBSITE" />
            <Project year="2022" title="AGUILA WEBSITE CONCEPT" />

          </div>
        </div>

      </div>
    </portfolio>
  )
}

export default Portfolio