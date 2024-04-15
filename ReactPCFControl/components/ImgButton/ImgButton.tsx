import * as React from "react";
import './ImgButton.css';

type ImgButtonProps = {
    StateIsVisible: boolean,
    ToggleStateIsVisibleHandler: (x:boolean) => void
}

const ImgButton: React.FC<ImgButtonProps> = ({ StateIsVisible, ToggleStateIsVisibleHandler }) : React.ReactElement => {
    return(
        <button className="ImgButton" onClick={() => ToggleStateIsVisibleHandler(StateIsVisible)}>
            <img onClick={() => ToggleStateIsVisibleHandler(StateIsVisible)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYMkcggY7vW8qgOmA-eZY2Qgxz0AMM9oppggoAxZCpDDMpPTE770m6exCJg&s" />
        </button>
    )
}

export default ImgButton;