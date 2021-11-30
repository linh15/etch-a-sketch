let container = document.querySelector(".container");


// for (let i = 0; i < 256; i++) {
//   let cell = document.createElement("div");
//   cell.className = "cell";
//   container.appendChild(cell);
// }

function createGrid(numPerSide) {
  let total = numPerSide*numPerSide;
  for (let i = 0; i < total; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    container.appendChild(cell);
    resetGrid();
  }
}
createGrid(16);


function hoverToEtch() {
  let cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", changeColor);
  }

}

hoverToEtch();

function changeColor() {
  this.style.backgroundColor = "Gold";
}

function resetGrid() {
  let cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "#e4e2ef";
  }
}

function processInput() {
  while (true) {
    let numGrid = prompt("How many squares per side do you want for the new grid? (max 64)", "16");
    if (numGrid != null && Number(numGrid) > 0 && Number(numGrid) < 64) {
      let num = Number(numGrid);
      container.innerHTML = "";
      createGrid(num);
      container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
      hoverToEtch();
      return;
    }
}

  let numGrid = prompt("How many squares per side do you want for the new grid? (max 64)", "16");
  if (numGrid != null && Number(numGrid) > 0 && Number(numGrid) < 64) {
    let num = Number(numGrid);
    container.innerHTML = "";
    createGrid(num);
    // document.querySelector(".container").style.gridTemplateColumns = "repeat(4, 1fr)";
    container.style.gridTemplateColumns = "repeat(" + num + ", 1fr)";
    hoverToEtch();
  } else {

  }
}
