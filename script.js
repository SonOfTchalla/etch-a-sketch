//Grid Size
let grid = 16;

//query selector
let conEl = document.querySelector(".container");

//Prints Grid
for(let i = 0; i < grid; i++){
    const line = document.createElement("div");
    line.classList.add("flex");
    for(let j = 0; j < grid; j++){
        const div = document.createElement("div");
        div.classList.add("squareStyle");
        div.addEventListener("mouseenter", () => {
        div.classList.add("draw");});
        line.appendChild(div);
    }
    conEl.appendChild(line);
}