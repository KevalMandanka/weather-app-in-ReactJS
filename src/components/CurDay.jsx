
function CurDay () {
    const getCurrentDay = ()=> {
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";
        let currentTime = new Date();
        var day = weekday[currentTime.getDay()];
        return day;
    }


    
    return (
        getCurrentDay()
    )
}

export default CurDay;