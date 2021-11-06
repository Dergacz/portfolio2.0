import React from "react";
import style from "./Footer.module.css";
import general from "../general/general.module.css";


export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={`${general.container} ${style.container}`}>
                <h3 className={style.title}>Stanislau Dziarhach</h3>
                <div className={style.linksBlock}>
                    <a className={style.links} href={"#"}><span className={style.linkedIn}>LinkedIn</span></a>
                    <a className={style.links} href={"#"}><span className={style.faceBook}>FaceBook</span></a>
                    <a className={style.links} href={"#"}><span className={style.telegram}>Telegram</span></a>
                    <a className={style.links} href={"#"}><span className={style.gitHub}>GitHub</span></a>
                </div>
                <div className={style.year}>© 2021 All Rights Reserved.</div>
            </div>
        </footer>
    )
}