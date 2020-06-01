
let main = document.getElementById("main");
let bgColor = document.getElementById("bgcolor")
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

function getGridSize() {
    let userSize = prompt("Please enter a grid size between 16 and 128");
    return makeRows(userSize,userSize)
};

function backgroundColor() {
    document.getElementById("main").style.backgroundColor = bgColor.value;
};
// not functional yet
function pixelColor() {
    document.getElementById("grid-item").style.backgroundColor = cellColor.value;
}

function clearGrid() {
    document.getElementById("container").innerHTML = " "
};

function makeRows(rows, cols) {
    clearGrid();
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";


    cell.addEventListener("mouseover", (e) => {
    

        if (!cell.style.opacity) {
            cell.style.opacity = 0
        }
    
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = "black";
        }
    
    
        if (cell.style.opacity < 1) {
            cell.style.opacity = Number(cell.style.opacity) + 0.1;
        }
    
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = cellColor.value;
        }
    
    }
    
)

}
};

main.appendChild(container);
 
darken(cell);

// pixelColor();

makeRows(16, 16);

