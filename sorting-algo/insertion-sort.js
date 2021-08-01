async function insertionSort(delay) {
    let bars = document.querySelectorAll(".bar");

    for (let i = 1; i < bars.length; i++) {
        let j = i;
        bars[i].style.backgroundColor = 'darkblue';
        while (j > 0 && parseInt(bars[j].style.height) < parseInt(bars[j - 1].style.height)) {
            bars[j].style.backgroundColor = 'darkblue';

            await new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                }, delay);
            });
            swap(bars, j, j - 1);
            bars[j].style.backgroundColor = 'rgb(49, 226, 13)';
            j -= 1;
        }
        bars[i - 1].style.backgroundColor = 'rgb(49, 226, 13)';
    }

    enable();
}

function swap(bars, i, j) {
    let firstHeight = bars[i].style.height;
    let firstLabel = bars[i].childNodes[0].innerText;
    
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = firstHeight;

    bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    bars[j].childNodes[0].innerText = firstLabel;
}