import * as React from 'react';
import './RangeButton.css';

type RangeButtonProps = {
    first: number,
    last: number,
}

const RangeButton: React.FC<RangeButtonProps> = ({ first, last }) : React.ReactElement => {
    return(
        <button className="RangeButton">{first}-{last}</button>
    )
}

export default RangeButton;