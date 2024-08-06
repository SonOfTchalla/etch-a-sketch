//Grid Size
let grid = 16;

//query selector
let conEl = document.querySelector(".container");
let buttonEL = document.querySelector(".ns");

//Button event listener
buttonEL.addEventListener("click", () => {
    grid = prompt("Number of squares per side?")
    if(grid > 100)
    {
        alert('No. of squares must not be more than 100')
    }else{
        conEl.innerHTML = null;
        drawGrid(grid)
    }
    
})

//Prints Grid
function drawGrid(gr){
    for(let i = 0; i < gr; i++){
        const line = document.createElement("div");
        line.classList.add("flex");
        for(let j = 0; j < gr; j++){
            const div = document.createElement("div");
            div.classList.add("squareStyle");
            let gridSize = gr;
            div.style.height = `calc(100vh / ${gridSize} )`;
            div.style.width = `calc(100vw / ${gridSize})`;
            let i = 1;
            div.addEventListener("mouseenter", () => {
            //.classList.add("draw");
                div.style.backgroundColor = `rgb(${randomNumGen()}, ${randomNumGen()}, ${randomNumGen()})`;
                if(i > 10){
                    return;
                }else{
                div.style.opacity = i / 10;
                i++;
                }
            });
            line.appendChild(div);
        }
        conEl.appendChild(line);
    }
}

drawGrid(grid)


function randomNumGen(){
    return Math.floor(Math.random() * 257) 
}