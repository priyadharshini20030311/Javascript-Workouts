
// setInterval & clearInterval

// const myInterval = setInterval(myStart, 1000);

// function myStart(){
    // const date = new Date();
    // document.getElementById("demo").innerHTML = date.toLocaleTimeString();
    // alert("hey")
// }

// function myStop(){
    // clearInterval(myInterval);
// }

// function start(){
    // setInterval(myStart, 1000);
    // setInterval(myStart, 5000);
// }



// setTimeout & clearTimeout

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting(){
    document.getElementById("sample").innerHTML = "Happy Birthday!"
}

function myStopFunction(){
    clearTimeout(myTimeout);
}