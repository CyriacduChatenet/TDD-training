export const setTime = (second : number) => {
    let lessThanOneMinute = 59;
    let MINUTE = 60;
    let HOUR = 3600;
    let DAY = 86400;

    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let days = 0;

    if(second <= lessThanOneMinute) {
       seconds = second;
    }

    if(second > lessThanOneMinute) {
        minutes = Math.round(second / MINUTE);
        seconds = second % MINUTE;
    }

    if(second >= HOUR) {
        hours = Math.round(second / HOUR);
        minutes = Math.round((second % HOUR)/ MINUTE);
    }

    if(second >= DAY) {
        days = Math.round(second / DAY);
        hours = Math.round((second % HOUR)/ MINUTE);
    }

    return  {
        days : days,
        hours : hours,
        minutes : minutes,
        seconds : seconds
    }
};