import React from "react";
import CurDate from "./CurDate";
import CurTime from "./CurTime";
import CurDay from "./CurDay";


function DateAndTime(){
    return (
        <p id="date"><CurDay /> | <CurDate /> | <CurTime /></p>
    )
}

export default DateAndTime;

   