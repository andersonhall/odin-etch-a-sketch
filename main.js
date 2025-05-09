let gridContainer = document.querySelector(".grid-container");
const button = document.querySelector("button");

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

function createGrid(value) {
  const percent = 100 / value;
  for (let i = 0; i < value * value; i++) {
    const div = document.createElement("div");
    div.style.width = `${percent}%`;
    div.style.height = `${percent}%`;
    div.classList.add("grid-item");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
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
