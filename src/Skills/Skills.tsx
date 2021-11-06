import React from "react";
import style from "./Skills.module.css";
import general from "../general/general.module.css";
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${general.container} ${style.container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"Redux"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"TypeScript"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    )
}