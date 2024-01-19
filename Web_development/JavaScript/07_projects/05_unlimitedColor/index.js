const randomColor = function (){
    var letters = "0123456789ABCDEF";
    var color = "#"
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// randomColor();

// const startchangeColor = function(){
//     document.body.style.backgroundColor = randomColor();
// }


let interVal;

function startchangeColor() {
    // if(!interVal){
    //     interVal = setInterval(changeColor, 1000)
    // }
     
    interVal = setInterval(changeColor, 500)
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
function stopchangeColor() {
    clearInterval(interVal)
    // interVal = null;
}
// const stopchangeColor = function(){
//     document.body.style.backgroundColor = randomColor();
// }

document.querySelector("#start").addEventListener('click', startchangeColor)
document.querySelector("#stop").addEventListener('click', stopchangeColor)

// Math.floor(Math.random())