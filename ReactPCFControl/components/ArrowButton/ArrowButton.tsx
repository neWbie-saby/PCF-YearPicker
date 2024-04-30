import * as React from "react";
import './ArrowButton.css';
import { YearButton } from "../YearButton/YearButton";

type ArrowButtonProps = {
    arrow: string,
    ClickHandler: () => void,
    startYear: number,
    endYear: number,
    firstYear: number,
    lastYear: number,
    isUpArrow: boolean
}

const ArrowButton: React.FC<ArrowButtonProps> = (
    { arrow, ClickHandler, startYear, endYear, firstYear, lastYear, isUpArrow }) : React.ReactElement => {
    return(
        (isUpArrow && firstYear <= startYear) || (!isUpArrow && lastYear >= endYear) ? 
        <button className="ArrowButtonDisabled">{arrow}</button>
        : <button className="ArrowButton" onClick={() => ClickHandler()}>{arrow}</button>
    )
}

export default ArrowButton;