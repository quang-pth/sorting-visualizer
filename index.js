$.getScript("./adjust-btn.js");
$.getScript("./sorting-algo/selection-sort.js");
$.getScript("./sorting-algo/bubble-sort.js");
$.getScript("./sorting-algo/quick-sort.js");
$.getScript("./sorting-algo/merge-sort.js");
$.getScript("./sorting-algo/insertion-sort.js");
$.getScript("./sorting-algo/heap-sort.js");
$.getScript("./sorting-algo/radix-sort.js");

const container = document.querySelector(".data-container");

const arraySize = document.getElementById("array_size");
let numOfBars = arraySize.value;
arraySize.addEventListener("input", () => {
  numOfBars = arraySize.value;
});

function generatebars(num = numOfBars) {
  for (let idx = 0; idx < num; idx++) {
    const value = Math.floor(Math.random() * 400) + 1;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
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
  selectionBtn.style.backgroundColor = "#7d1eeb";
  SelectionSort(delayTime);
});

const bubbleBtn = document.getElementById("bubble-btn");
bubbleBtn.addEventListener("click", () => {
  disable();
  bubbleBtn.style.backgroundColor = "#7d1eeb";
  BubbleSort(delayTime);
});

const quickBtn = document.getElementById("quick-btn");
quickBtn.addEventListener("click", () => {
  disable();
  quickBtn.style.backgroundColor = "#7d1eeb";
  quickSort(delayTime);
});

const mergeBtn = document.getElementById("merge-btn");
mergeBtn.addEventListener("click", () => {
  disable();
  mergeBtn.style.backgroundColor = "#7d1eeb";
  mergeSort(delayTime);
});

const insertionBtn = document.getElementById("insertion-btn");
insertionBtn.addEventListener("click", () => {
  disable();
  insertionBtn.style.backgroundColor = "#7d1eeb";
  insertionSort(delayTime);
});

const heapBtn = document.getElementById("heap-btn");
heapBtn.addEventListener("click", () => {
  disable();
  heapBtn.style.backgroundColor = "#7d1eeb";
  heapSort(delayTime);
});

const radixBtn = document.getElementById("radix-btn");
radixBtn.addEventListener("click", () => {
  disable();
  radixBtn.style.backgroundColor = "#7d1eeb";
  radixSort(delayTime);
});

const resetBtn = document.getElementById("reset_btn");
resetBtn.addEventListener("click", () => {
  window.location.reload();
})