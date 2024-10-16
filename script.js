const body = document.querySelector("body");
const gridContainer = document.createElement("div");
const btn = document.createElement("button");
btn.id = "set-grid-btn";
btn.textContent = "Set the Grid";
gridContainer.id = "grid-container";
body.appendChild(btn);
body.appendChild(gridContainer);

function updateGrid(width, height) {
  let gridWidth = "6.25vh";
  let tempWith = 6.25;
  if (width > 16) {
    gridWidth = `${100 / width}vh`;
    tempWith = 100 / width;
  } else if (height > 16) {
    gridWidth = `${100 / height}vh`;
    tempWith = 100 / height;
  }
  gridContainer.style.width = `${Number(tempWith) * Number(width)}vh`;
  for (let j = 0; j < height * width; j++) {
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

btn.addEventListener("click", (e) => {
  let width = 16;
  let height = 16;
  while (true) {
    width = Number(prompt("Enter the width grid number(0 < n <= 100):", 16));
    height = Number(prompt("Enter the height grid number(0 < n <= 100):", 16));
    if (
      typeof width === "number" &&
      typeof height === "number" &&
      width > 0 &&
      height > 0 &&
      width <= 100 &&
      height <= 100
    ) {
      break;
    } else {
      alert("invalid, enter again!");
    }
  }
  const allBoxes = document.querySelectorAll(".grid-box");
  allBoxes.forEach((node) => {
    node.remove();
  });
  updateGrid(width, height);
});

updateGrid(16, 16);
