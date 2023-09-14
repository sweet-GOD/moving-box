const myDiv = document.querySelector('#myDiv');
window.addEventListener("keydown", move);
let y = 0;
let x = 0;

window.addEventListener("keydown", event => console.log(event.key));

function move(event){
    switch(event.key){

        case "ArrowDown":
            y += 15;
            myDiv.style.top = y + "px"
            myDiv.style.background = "blue"
            break;
        case "ArrowUp":
            y -= 15;
            myDiv.style.top = y + "px"
            myDiv.style.background = "green"
            break;
        case "ArrowRight":
            x += 15;
            myDiv.style.left = x + "px"
            myDiv.style.background = "crimson"
            break;
        case "ArrowLeft":
            x -= 15;
            myDiv.style.left = x + "px"
            myDiv.style.background = "purple"
            break;
        default:
            break;
    }

}