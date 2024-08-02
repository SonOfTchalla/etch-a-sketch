//Grid Size
let grid = 16;

//query selector
let conEl = document.querySelector(".container");
let buttonEL = document.querySelector(".ns");

//Button event listener
buttonEL.addEventListener("click", () => {
    grid = prompt("Number of squares per side?")
    grid = Number(grid)
})

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

