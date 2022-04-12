import React, {FunctionComponent} from 'react';
import style from "./Title.module.css";

interface ITitle {
    title: string;
    subtitle: string;
}

export const Title:FunctionComponent<ITitle> = ({
    title,
    subtitle
    }) => {

    return (
        <div className={style.title}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}