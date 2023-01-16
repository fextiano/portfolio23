import './about.css'
import render1 from '../../assets/backgrounds/render.png'
import DownloadCV from '../header/DOWNLOADCV'
import Title from '../Title/Title'

const About = () => {
  return (
    <about id="about">
      <div className="about__container">

        <div className="textContent">

            <Title paragraph="TO KNOW ME BETTER" heading="ABOUT ME" />

            <hr />
            <p>I’m a <strong> Frontend Developer, </strong> <br />
            professional and personal <strong> IT technician </strong> <br />
            and <strong> Graphic UX/UI Designer </strong> <br />
            from <strong className='text-light'> Buenos Aires, Argentina. </strong> <br />
            Specializing in designing and <br /> building <strong>
            exceptional digital experiencies. </strong> <br />
            Since I was a child I’ve always had a fascination <br /> for Art and Technology,
            so I started learning <br /> and improving my skills at a very young age.<br />
            I consider myself someone who enjoys to see projects <br />
            come true so I’m <strong> constantly learning </strong> new technologies.<br />
            Actually studying <strong> Systems Engineering </strong> at <a href="https://www.utn.edu.ar/es/" target='_blank'> UTN <br />
            (Universidad Tecnologica Nacional BA) </a> </p>
            <hr />
        </div>
        <DownloadCV/>
        <img src={render1} loading='lazy' alt="" />
      </div>
    </about>
  )
}

export default About