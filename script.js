const body = document.querySelector("body");
const gridContainer = document.createElement("div");
const btn = document.createElement("button");
btn.id = "set-grid-btn";
btn.textContent = "Set the Grid";
gridContainer.id = "grid-container";
body.appendChild(btn);
body.appendChild(gridContainer);

function updateGrid(width) {
  let gridWidth = "6.25vh";
  let tempWith = 6.25;
  if (width > 16) {
    gridWidth = `${100 / width}vh`;
    tempWith = 100 / width;
  }
  gridContainer.style.width = `${Number(tempWith) * Number(width)}vh`;
  for (let j = 0; j < width * width; j++) {
    const gridDiv = document.createElement("div");
    gridDiv.className = "grid-box";
    gridDiv.style.width = gridWidth;
    gridDiv.style.height = gridWidth;
    gridDiv.style.opacity = 0.4;
    gridDiv.addEventListener("mouseleave", (e) => {
      if (
        Number(e.target.style.opacity) >= 0.5 &&
        Number(e.target.style.opacity) < 1
      ) {
        e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
      } else if ( Number(e.target.style.opacity) != 1){
        e.target.style.backgroundColor = `rgb(${Math.floor(
          255 * Math.random()
        )},${Math.floor(255 * Math.random())},${Math.floor(
          255 * Math.random()
        )})`;
        e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
      }
    });
    gridContainer.appendChild(gridDiv);
  }
}

function reset() {
  const allBoxes = document.querySelectorAll(".grid-box");
  allBoxes.forEach((node) => {
    node.remove();
  });
}
btn.addEventListener("click", (e) => {
  let width = 16;
  while (true) {
    width = Number(prompt("Enter the grid width number: (0 < n <= 100)", 16));
    if (
      typeof width === "number" &&
      width > 0 &&
      width <= 100
    ) {
      break;
    } else {
      alert("invalid, enter again!");
    }
  }
  reset();
  updateGrid(width);
});

updateGrid(16);
