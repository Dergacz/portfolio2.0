import React from "react";
import style from "./Projects.module.css";
import general from "../general/general.module.css";
import {Project} from "./Project/Project";


export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${general.container} ${style.container}`}>
                <h2 className={style.title}>My Projects</h2>
                <div className={style.projects}>
                    <Project title={"TodoList"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Project title={"SocialNetwork"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                </div>
            </div>
        </div>
    )
}