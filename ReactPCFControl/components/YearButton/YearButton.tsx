import * as React from 'react';
import './YearButton.css';

type YearButtonProps = {
    name: string,
    ClickHandler: (x:string) => void
}

export const YearButton: React.FC<YearButtonProps> = ({ name, ClickHandler }) : React.ReactElement => {
    return(
        <button className="YearButton" onClick={() => ClickHandler(name)}>{name}</button>
    )
}