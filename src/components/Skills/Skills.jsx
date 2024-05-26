import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaSass, FaGitAlt, FaNode } from "react-icons/fa6";
// import Tilt from 'react-parallax-tilt';

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaSquareJs />
              {/* <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              </Tilt> */}
            </li>
            <li>
                <FaReact />
              {/* <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              </Tilt> */}
            </li>
            <li>
                <FaSass />
              {/* <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              </Tilt> */}
            </li>
            <li>
                <FaGitAlt />
              {/* <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              </Tilt> */}
            </li>
            <li>
                <FaNode />
              {/* <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
              </Tilt> */}
            </li>
        </ul>
    </div>
  )
}

export default Skills
