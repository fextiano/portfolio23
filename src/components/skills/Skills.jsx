import './skills.css'
import Title from '../Title/Title'
import SkillArrow from '../skillArrow/SkillArrow'

const Skills = () => {
  return (
    <skills id='skills'>
      <div className="skills__container">
          <Title paragraph="CONSTANTLY IMPROVING" heading="MY SKILLS" />

          <div className="habilities__slider">
            <h2>Developer</h2>
            <SkillArrow skillname="HTML" />
            <SkillArrow skillname="CSS" />
            <SkillArrow skillname="SASS CSS" />
            <SkillArrow skillname="Tailwind CSS" />
            <SkillArrow skillname="JavaScript" />
            <SkillArrow skillname="TypeScript" />
            <SkillArrow skillname="React JS" />
            <SkillArrow skillname="Vite" />
            <h2>Designer</h2>
            <SkillArrow skillname="Figma" />
            <SkillArrow skillname="Adobe Photoshop CC" />


          </div>
      </div>
    </skills>
  )
}

export default Skills