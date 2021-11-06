import React from "react";
import style from "./Main.module.css";
import general from "../general/general.module.css"

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${general.container} ${style.container}`}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am <br/> Stanislau Dziarhach</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={style.photo}>

                </div>
            </div>
        </div>
    )
}