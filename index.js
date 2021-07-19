const container = document.querySelector(".data-container");

function generatebars(num = 20) {
    for (let idx = 0; idx < 20; idx++) {
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