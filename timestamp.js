import { helper } from '@ember/component/helper';
    export function formatTime(duration) {
   
    //if(duration === null || duration == Infinity || duration < 0){
      //  return "Invalid Time Stamp";
    //}

    let s = Math.floor((duration / 1000) % 60); // seconds
    let m = Math.floor((duration / (60 * 1000)) % 60); // minutes
    let h = Math.floor((duration / (1000 * 3600))); // hours

    s < 10 ? s = `0${s}`: s = `${s}` // template strings
    m < 10 ? m = `0${m}`: m = `${m}`
    h < 10 ? h = `0${h}`: h = `${h}`

    if (h == "00"){
        return `${m}:${s}` 
    }

    else{
        return `${h}:${m}:${s}` 
    }
}

export default helper(formatTime);

//<span>TimeStamp:</span> {{format-time test}}
//Get the time stamp during the videos
