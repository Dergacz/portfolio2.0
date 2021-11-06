import React from "react";
import style from "./Contacts.module.css";
import general from "../general/general.module.css";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${general.container} ${style.container}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input
                        className={style.inputName}
                        name={"name"}
                        placeholder={"Name"}
                        type={"text"}
                    />
                    <input
                        className={style.inputEmail}
                        name={"e-mail"}
                        placeholder={"E-mail"}
                        type={"email"}
                    />
                    <textarea
                        className={style.textarea}
                        name={"message"}
                        placeholder={"Your message"}
                    />
                    <button className={style.button}>Send Message</button>
                </form>

            </div>
        </div>
    )
}