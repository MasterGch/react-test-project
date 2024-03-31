import React from 'react'
import style from './Skills.module.css'
import {FaSquareJs , FaReact , FaSass , FaGitAlt , FaNode} from 'react-icons/fa6'


function Skills() {
  return (
    <div className={style.skills_con}>
        <h3 className={style.skill_title}>My Skills Set</h3>
        <ul className={style.skill_list}>
            <li>
                <FaSquareJs />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaSass />
            </li>
            <li>
                <FaGitAlt />
            </li>
            <li>
                <FaNode />
            </li>
        </ul>
    </div>
  )
}

export default Skills