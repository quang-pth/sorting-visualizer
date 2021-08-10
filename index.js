$.getScript("./adjust-btn.js");
$.getScript("./sorting-algo/selection-sort.js");
$.getScript("./sorting-algo/bubble-sort.js");
$.getScript("./sorting-algo/quick-sort.js");
$.getScript("./sorting-algo/merge-sort.js");
$.getScript("./sorting-algo/insertion-sort.js");
$.getScript("./sorting-algo/heap-sort.js");

const container = document.querySelector(".data-container");

const arraySize = document.getElementById("array_size");
let numOfBars = arraySize.value;
arraySize.addEventListener("input", () => {
  numOfBars = arraySize.value;
});

function generatebars(num = numOfBars) {
  for (let idx = 0; idx < num; idx++) {
    const value = Math.floor(Math.random() * 100) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    // add bar to container
    container.appendChild(bar);
  }
}

// re-create bars everytime user click new array button
function generate() {
  // window.location.reload();
  const bars = document.querySelectorAll('.bar');
  for (let idx = 0; idx < bars.length; idx++) {
    bars[idx].remove();
  }
  generatebars(numOfBars);
}

// create initial bar
generatebars();

const newArrBtn = document.getElementById("new-arr-btn");
newArrBtn.addEventListener("click", () => {
  generate();
});

const sortSpeed = document.getElementById("sort-speed");
let delayTime = sortSpeed.value;
sortSpeed.addEventListener("input", () => {
  delayTime = sortSpeed.value;
});

const selectionBtn = document.getElementById("selection-btn");
selectionBtn.addEventListener("click", () => {
  disable();
  SelectionSort(delayTime);
});

const bubbleBtn = document.getElementById("bubble-btn");
bubbleBtn.addEventListener("click", () => {
  disable();
  BubbleSort(delayTime);
});

const quickBtn = document.getElementById("quick-btn");
quickBtn.addEventListener("click", () => {
  disable();
  quickSort(delayTime);
});

const mergeBtn = document.getElementById("merge-btn");
mergeBtn.addEventListener("click", () => {
  disable();
  mergeSort(delayTime);
});

const insertionBtn = document.getElementById("insertion-btn");
insertionBtn.addEventListener("click", () => {
  disable();
  insertionSort(delayTime);
});

const heapBtn = document.getElementById("heap-btn");
heapBtn.addEventListener("click", () => {
  disable();
  heapSort(delayTime);
});