

function createBox(){
    const box = document.createElement("div");
    box.setAttribute('class','box')
    box.style.width = "60px";
    box.style.height = "50px";
    box.style.backgroundColor = "black";
    return box;
}

function changeToRedColor(event) {
    event.target.style.backgroundColor = "red";
}

function fillContainer(){
    const container = document.getElementById("container")
    for (let row = 0; row < 16; row++){
        for (let column = 0; column < 16; column++){
            const box = createBox();
            box.addEventListener("mouseover", changeToRedColor);
            container.appendChild(box);
        }
    }
}


fillContainer();
