export const milliSecToStr = (milliSec_m) => {
    let day, hour, min, sec;
    sec = parseInt((milliSec_m / 1000) % 60);
    min = parseInt((milliSec_m / 1000 / 60) % 60);
    hour = parseInt((milliSec_m / 1000 / 60 / 60) % 24);
    day = parseInt(milliSec_m / 1000 / 60 / 60 / 24);

    return {
        day: day,
        hour: hour,
        min: min,
        sec: sec,
    };
}