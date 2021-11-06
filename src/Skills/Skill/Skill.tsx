import React, {FunctionComponent} from "react";
import style from "./Skill.module.css";

interface ISill {
    title: string;
    description: string;
}

export const Skill: FunctionComponent<ISill> = ({
    title,
    description
                                                }) => {
    return (
        <div className={style.skill}>
            <div className={style.img}></div>
            <h3 className={style.title}>{title}</h3>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}