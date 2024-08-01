//Grid Size
let grid = 16;

//query selector
let conEl = document.querySelector(".container");

//Prints Grid
for(let i = 0; i < grid; i++){
    const line = document.createElement("div");
    line.style.display = "flex";
    for(let j = 0; j < grid; j++){
        const div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.height = "calc(100vh / 16)";
        div.style.width = "calc(100vw / 16)";
        div.style.margin = ".1vh";
        line.appendChild(div);
    }
    conEl.appendChild(line);
}