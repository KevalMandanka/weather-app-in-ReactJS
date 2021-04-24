

function CurTime () {
    const getCurrentTime = () => {
        var time = new Date();
        let hours = time.getHours();
        let mins = time.getMinutes();
        let perios = "AM";
        if(hours > 11){
            perios = "PM";
            if(hours > 12){
                hours = hours - 12 ;
            }
        }
        if(mins < 10){
            mins = "0" + mins;
        }
        if(hours < 10){
            hours = "0" + hours;
        }
        return `${hours}:${mins}${perios}` ;
    }

    
    return (
        getCurrentTime()
    )
}

export default CurTime;