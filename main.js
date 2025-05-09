let gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");

function getRandomColor() {
  const R = Math.floor(Math.random() * 255) + 1;
  const G = Math.floor(Math.random() * 255) + 1;
  const B = Math.floor(Math.random() * 255) + 1;
  return `rgb(${R},${G},${B})`;
}

function createGrid(value) {
  const percent = 100 / value;
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement("div");
    div.style.width = `${percent}%`;
    div.style.height = `${percent}%`;
    div.classList.add("grid-item");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = getRandomColor();
    });
    gridContainer.appendChild(div);
  }
}

button.addEventListener("click", () => {
  const value = prompt("How many squares per side?");
  gridContainer.remove();
  gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  document.body.appendChild(gridContainer);
  createGrid(value);
});

createGrid(16);
