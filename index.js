

function createBox(){
    const box = document.createElement("div");
    box.setAttribute('class','box')
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "black";
    return box;
}

function changeToRedColor(event) {
    event.target.style.backgroundColor = "red";
}

function fillContainer(){
    const container = document.getElementById("container")
    for (let i = 0; i < 255; i++){
        const box = createBox();
        box.addEventListener("mouseover", changeToRedColor);
        container.appendChild(box);
    }
}


fillContainer();
