import React from 'react'
import CV from '../../assets/cv.pdf'

const DownloadCV = () => {
  return (
    <div className="cta">
      <a href= {CV} download className='btn-primary'>Download CV</a>
    </div>
    )
}

export default DownloadCV