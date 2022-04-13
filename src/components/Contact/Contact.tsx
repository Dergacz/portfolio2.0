import React, {FunctionComponent} from 'react';
import style from './Contact.module.css';

interface IContact {
    item: string;
    value: string;
}

export const Contact:FunctionComponent<IContact> = ({
    item,
    value
    }) => {
    return (
        <li className={style.contact}>
            {item}: {value}
        </li>
    )
}