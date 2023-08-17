let rows = 16;
let columns = 16;
const container = document.getElementById("container"); 


function createBox(width){
    const box = document.createElement("div");
    box.setAttribute('class','box')
    box.style.width = (960 / width) + "px";
    box.style.height = "50px";
    box.style.backgroundColor = "black";
    return box;
}

function changeToRedColor(event) {
    event.target.style.backgroundColor = "red";
}

function fillContainer(){
    for (let i = 0; i < rows; i++){
        for (let i = 0; i < columns; i++){
            const box = createBox(columns);
            box.addEventListener("mouseover", changeToRedColor);
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
