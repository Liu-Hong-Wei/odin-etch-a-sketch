const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
body.appendChild(gridContainer);

let width = 16;
let height = 16;
for (let i = 0; i < width * height; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-box";
  gridDiv.addEventListener("mouseleave", (e) => {
    gridDiv.style.backgroundColor = "lightblue";
  });
  gridContainer.appendChild(gridDiv);
}
