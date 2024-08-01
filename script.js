//Grid Size
let grid = 16;

//query selector
let conEl = document.querySelector(".container");

//Prints Grid
for(let i = 0; i < grid; i++){
    for(let j = 0; j < grid; j++){
        const div = document.createElement("div");
        conEl.appendChild(div);
    }
}