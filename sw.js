// ids of secs mins and mill secs to set and update
let milli = document.getElementById("msec");

var sec = document.getElementById("sec");

let min = document.getElementById("min");

//counter of no of laps
let indexcount = 1;
//indicator of whther to show laps or not
let indicator = false;
// function which displays and updates the laps  
function lap() {

    if (indicator) {
        // displaying the laps 

        let lapsdisplay = document.getElementById("laps");
        let div = document.createElement("div");
        lapsdisplay.style.display = "block";
        let indexdiv = document.createElement("div");

        let time = document.createElement("div");

        indexdiv.setAttribute("id", "in" + indexcount);
        time.setAttribute("id", "t" + indexcount);
        indexdiv.innerHTML = indexcount;
        time.innerHTML = min.innerHTML + ":" + sec.innerHTML + "." + milli.innerHTML;
        let containerdiv = document.createElement("div");
        containerdiv.appendChild(indexdiv);
        containerdiv.appendChild(time);
        containerdiv.setAttribute("id", "ls");

        lapsdisplay.appendChild(containerdiv);

        indexcount += 1;

    }

}

//interval to collect the setinterval id
let interval = null;

//starts the timer
function start() {

    if (interval == null) {
        let secs = null;
        indicator = true;
        interval = setInterval(function() {

            let milsecs = parseInt(milli.innerHTML);

            milsecs += 1;

            if (milsecs < 10) {

                milli.innerHTML = "0" + milsecs;

            } else {

                milli.innerHTML = milsecs;
            }

            // secs update is here
            if (milsecs == 99) {
                secs = parseInt(sec.innerHTML);
                secs += 1;
                if (secs < 10) {
                    sec.innerHTML = "0" + secs;

                } else {

                    sec.innerHTML = secs;
                }
                milli.innerHTML = 0;
                milsecs = 0;
            }

            // mins update is here
            if (secs == 60) {
                let mins = parseInt(min.innerHTML);
                mins += 1;
                if (mins < 10) {
                    min.innerHTML = "0" + mins;

                } else {

                    min.innerHTML = mins;

                }
                sec.innerHTML = 0;
                secs = 0;
            }


        }, 10);
    }

}


//pauses at particular point
function pause() {
    // body...

    indicator = false;

    clearInterval(interval);
    interval = null;
}

let lapsection = null;
let lapmain = document.getElementById("laps");
//rests the time
function reset() {
    // body...

    clearInterval(interval);
    indicator = false;
    indexcount = 1;
    interval = null;

    milli.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";

    // loop will reset the lap section
    lapsection = document.getElementById("ls");

    while (lapsection != null) {

        lapmain.removeChild(lapsection);
        lapsection = document.getElementById("ls");

    }
    lapmain.style.display = "none";


}