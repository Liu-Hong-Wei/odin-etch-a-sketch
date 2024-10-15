const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";
body.appendChild(gridContainer);

for (let i = 0; i < 16 * 16; i++) {
  const gridDiv = document.createElement("div");
  gridDiv.className = "grid-box";
  gridContainer.appendChild(gridDiv);
}
