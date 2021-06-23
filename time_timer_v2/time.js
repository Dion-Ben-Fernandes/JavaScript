// function realtime() {
//     var d = new Date();
//     var n = d.toLocaleTimeString();
//     console.log(d);
//     console.log(n);
//     document.getElementById("timer").innerHTML = n;

//     setInterval(() => {
//         var d = new Date();
//         var n = d.toLocaleTimeString();
//         document.getElementById('timer').innerHTML = n;
//     }, 1000)
// }

const timer = document.getElementById('stopwatch');
timer.innerHTML = '00:00:00';
console.log(timer);

var hr = 0;
var min = 0;
var sec = 0;
var m_sec = 0;
var stoptime = true;

function startTimer() {
    // console.log("startTimer()");
    if (stoptime == true) {
        stoptime = false;
        timeCycle();
    }
}

function stopTimer() {
    // console.log("stopTimer()");
    if (stoptime == false) {
        stoptime = true;
    }
}

function timeCycle() {
    // console.log("timeCycle()");
    if (stoptime == false){
        m_sec = parseInt(m_sec);
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        m_sec = m_sec + 1;

        if (m_sec == 450){
            sec = sec + 1;
            m_sec = 0;
        }

        if (sec == 60){
            min = min + 1;
            sec = 0;
            m_sec = 0;
        }

        if (min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
            m_sec = 0;
        }

        if (sec < 10 || sec == 0){
            sec = "0" + sec;
        }

        if (min < 10 || min == 0){
            min = "0" + min;
        }

        if (hr < 10 || hr == 0){
            hr = "0" + hr;
        }

        timer.innerText = `${hr}:${min}:${sec}`;

        setInterval( "timeCycle()" ,1000);
    }
}

function resetTimer() {
    if ( stoptime == false || stoptime == true ){
        stoptime = true;
        timer.innerHTML = '00:00:00';
        m_sec = 0;
        sec = 0;
        min = 0;
        hr = 0;
    }
}