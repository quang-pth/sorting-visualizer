$.getScript("./adjust-btn.js");
$.getScript("./sorting-algo/selection-sort.js");
$.getScript("./sorting-algo/bubble-sort.js");
$.getScript("./sorting-algo/quick-sort.js");

const container = document.querySelector(".data-container");

function generatebars(num = 44) {
    for (let idx = 0; idx < num; idx++) {
        const value = Math.floor(Math.random() * 100) + 1;
        const bar = document.createElement("div");
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        // offset bar horizontally
        bar.style.transform = `translateX(${idx * 30}px)`;
        // create bar label associated with its value
        const barLabel = document.createElement('label');
        barLabel.classList.add('bar_id');
        barLabel.innerHTML = value;
        // add label to bar
        bar.appendChild(barLabel);
        // add bar to container
        container.appendChild(bar);
    }
}

// re-create bars everytime user click new array button
function generate() {
    window.location.reload();
}

// create initial bar
generatebars();

const newArrBtn = document.getElementById('new-arr-btn');
newArrBtn.addEventListener('click', () => {
    generate();
});

const selectionBtn = document.getElementById('selection-btn');
selectionBtn.addEventListener('click', () => {
    disable();
    SelectionSort(45);
});

const bubbleBtn = document.getElementById('bubble-btn');
bubbleBtn.addEventListener('click', () => {
    disable();
    BubbleSort(45);
});

const quickBtn = document.getElementById('quick-btn');
quickBtn.addEventListener('click', () => {
    disable();
    quickSort(45);
});

