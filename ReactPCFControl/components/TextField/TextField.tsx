import * as React from "react";
import './TextField.css';

type TextFieldProps = {
    disabled: boolean,
    value: any
}

export const TextField: React.FC<TextFieldProps> = ({ disabled, value }) : React.ReactElement => {
    return(
        <input className="TextField" type="text" disabled={disabled} value={value}/>
    )
}