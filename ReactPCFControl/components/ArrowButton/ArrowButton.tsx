import * as React from "react";
import { YearButton } from "../YearButton/YearButton";

type ArrowButtonProps = {
    arrow: string,
    ClickHandler: any
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ arrow, ClickHandler }) : React.ReactElement => {
    return(
        <YearButton name={arrow} ClickHandler={ClickHandler} />
    )
}

export default ArrowButton;