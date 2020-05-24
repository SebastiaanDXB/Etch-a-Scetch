
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

    color20();
    color40();
    color60();
    color80();
    color100();



    function color20() {
        if (cell.style.backgroundColor = "rgba(0,0,0,0)") {
            cell.style.backgroundColor = "rgba(0,0,0,0.2)"
        }
    };     

    function color40() {
        if (cell.style.backgroundColor = "rgba(0,0,0,0.2)") {
            cell.style.backgroundColor = "rgba(0,0,0,0.4)"
        }
    };

    function color60() {
        if (cell.style.backgroundColor = "rgba(0,0,0,0.4)") {
            cell.style.backgroundColor = "rgba(0,0,0,0.6)"
        }    
    };

    function color80() {
        if (cell.style.backgroundColor = "rgba(0,0,0,0.6)") {
            cell.style.backgroundColor = "rgba(0,0,0,0.8)"
        }    
    };

    function color100() {
        if (cell.style.backgroundColor = "rgba(0,0,0,0.8)") {
            cell.style.backgroundColor = "rgba(0,0,0,1)"
        }    
    };

    

});

};

   main.appendChild(container);
}   



makeRows(16, 16);

