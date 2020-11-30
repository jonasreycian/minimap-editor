class Minimap {
  constructor(width, height, minimapElement) {
    this.width = width;
    this.height = height;
    this.minimapElement = minimapElement;
  }

  generateDefaultMap() {
    let mapValue = new Array();
    let startY = this.minimapElement.getBoundingClientRect().y;
    let image_width = 47;
    for (let i = 1; i <= this.height; i++) {
      let arr = new Array();
      let startX = this.minimapElement.getBoundingClientRect().x;
      for (let j = 1; j <= this.width; j++) {
        arr.push({
          uri: "./assets/sand.png",
          pos_x: startX,
          pos_y: startY,
          width: image_width,
        });
        startX += image_width;
      }
      startY += image_width;
      mapValue.push(arr);
    }
    return mapValue;
  }

  loadCanvas() {
    var canvas = document.createElement("canvas");
    canvas.id = "CursorLayer";
    canvas.width = this.minimapElement.clientWidth * 0.8;
    canvas.height = this.minimapElement.clientHeight * 0.8;
    canvas.style.zIndex = 8;
    canvas.style.position = "absolute";
    canvas.style.border = "1px solid";
    minimapElement.appendChild(canvas);
  }
}

const MAX_HEIGHT = 20;
const MAX_WIDTH = 30;
const L1_SAND = "./assets/sand.png";
const L1_GRASS = "./assets/grass.png";
const L2_TREE = "./assets/tree.png";
const L2_BARREL = "./assets/barrel.png";

var WINDOW_WIDTH = window.innerWidth;
var WINDOW_HEIGHT = window.innerHeight;

// Selectors
const grassImg = document.querySelector(".grass");
const sandImg = document.querySelector(".sand");
const treeImg = document.querySelector(".tree");
const barrelImg = document.querySelector(".barrel");
const minimapElement = document.querySelector(".mini_map");

let i_height = prompt(`Enter the height of map. Max: ${MAX_HEIGHT} `);
let i_width = prompt(`Enter the width of map. Max: ${MAX_WIDTH} `);
let minimap = new Minimap(i_width, i_height, minimapElement);

// Draw the default map
console.log(minimap.generateDefaultMap());
console.log(minimapElement.getBoundingClientRect().x);
console.log(minimapElement.clientWidth);
minimap.loadCanvas(minimapElement);

let image = document.createElement("img");
image.src = L1_GRASS;
minimapElement.appendChild(image);

// Event Listeners
grassImg.addEventListener("dragend", dragGrass);
sandImg.addEventListener("dragstart", dragSand);
treeImg.addEventListener("dragstart", dragTree);
barrelImg.addEventListener("dragstart", dragBarrel);

// Functions
function dragGrass(event) {
  event.preventDefault();
  // Dropped coordinates
  let xLoc = event.clientX;
  let yLoc = event.clientY;
}
function dragSand(event) {
  event.preventDefault();
  // Dropped coordinates
  let xLoc = event.clientX;
  let yLoc = event.clientY;
}
function dragTree(event) {
  event.preventDefault();
  // Dropped coordinates
  let xLoc = event.clientX;
  let yLoc = event.clientY;
}
function dragBarrel(event) {
  event.preventDefault();
  // Dropped coordinates
  let xLoc = event.clientX;
  let yLoc = event.clientY;
}
