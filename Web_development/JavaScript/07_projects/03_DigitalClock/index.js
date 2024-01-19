// const printTime = document.getElementById('clock');
const printTime = document.querySelector('#clock')

let date =  new Date();

setInterval(function(){
    // console.log(date.toLocaleTimeString());
    printTime.innerHTML = date.toLocaleTimeString();
}, 1000);