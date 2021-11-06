import React, {FunctionComponent} from "react";
import style from "./Project.module.css";

interface IProjects {
    title: string;
    description: string;
}

export const Project: FunctionComponent<IProjects> = ({
    title,
    description
                                                      }) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                    <a href={""}>
                        <button className={style.button}>Watch</button>
                    </a>
            </div>
            <h3 className={style.title}>{title}</h3>
            <div className={style.description}>
                {description}
            </div>
        </div>
    )
}