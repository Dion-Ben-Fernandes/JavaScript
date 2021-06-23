// function realtime() {
  
//     let time = moment().format('h:mm:ss a');
//     document.getElementById('time').innerHTML = time;
    
//     setInterval(() => {
//       time = moment().format('h:mm:ss a');
//       document.getElementById('time').innerHTML = time;
//     }, 1000)
//   }
  
//   realtime();

// var d = new Date();
// var n = d.toLocaleTimeString();
// document.getElementById("time").innerHTML = n;

function realtime() {
    var d = new Date();
    var n = d.toLocaleTimeString();
    console.log(d);
    console.log(n);
    document.getElementById("timer").innerHTML = n;

    setInterval(() => {
        var d = new Date();
        var n = d.toLocaleTimeString();
        document.getElementById('timer').innerHTML = n;
    }, 1000)
}