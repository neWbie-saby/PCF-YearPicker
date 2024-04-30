import * as React from 'react';
import './YearButton.css';

type YearButtonProps = {
    name: string,
    ClickHandler: (x:string) => void,
    startYear: number,
    endYear: number
}

export const YearButton: React.FC<YearButtonProps> = ({ name, ClickHandler, startYear, endYear }) : React.ReactElement => {
    let year: number = +name;

    return(
        (year >= startYear && year <= endYear) ?
        <button className="YearButton" onClick={() => ClickHandler(name.toString())}>{name.toString()}</button> 
        : <button className="YearButtonDisabled"></button>
    )
}