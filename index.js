let rows = 16;
let columns = 16;
const container = document.getElementById("container"); 
const slider1 = document.getElementById("slider1");

slider1.addEventListener("input", updateSlider);

function updateSlider(){
    const hue = slider1.value;
    slider1.style.background = `linear-gradient(to right, hsl(0, 100%, 50%), hsl(${hue}, 100%, 50%))`;
}

function createBox(width){
    const box = document.createElement("div");
    box.setAttribute('class','box')
    box.style.width = (960 / width) + "px";
    box.style.height = "50px";
    box.style.backgroundColor = "black";
    return box;
}

function changeColor(event) {
    //event.target.style.backgroundColor = slider1;
    const hue = slider1.value;
    event.target.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

function fillContainer(){
    for (let i = 0; i < rows; i++){
        for (let i = 0; i < columns; i++){
            const box = createBox(columns);
            box.addEventListener("mouseover", changeColor);
            container.appendChild(box);
        }
    }
}

fillContainer();

let question = document.getElementById("question")

question.addEventListener("click", function(){
    container.textContent = "";
    let size = prompt("Enter the size of your grid: ");
    rows = size;
    columns = size;
    createBox(columns);
    fillContainer();
})
