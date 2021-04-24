

function CurDate () {
    const getCurrentDate = () => {
        var months = new Array(12);
        months[0] = "Jan";
        months[1] = "Feb";
        months[2] = "Mar";
        months[3] = "Apr";
        months[4] = "May";
        months[5] = "Jun";
        months[6] = "Jul";
        months[7] = "Aug";
        months[8] = "Sep";
        months[9] = "Oct";
        months[10] = "Nov";
        months[11] = "Dec";
        var now = new Date();
        var month = months[now.getMonth()];
        var day = now.getDate();
        
        return `${month} ${day}`;
    }

    
    return (
        getCurrentDate()
    );
}

export default CurDate;