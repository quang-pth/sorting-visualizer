function quickSort(delay) {
    let bars = document.querySelectorAll(".bar");
    quickSortPartitioning(bars, 0, bars.length - 1, delay);
    return array;
}

async function quickSortPartitioning(bars, startIdx, endIdx, delay) {
    if (startIdx >= endIdx) return;

    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;

    // change color

    bars[pivotIdx].style.backgroundColor = 'darkblue';
    bars[leftIdx].style.backgroundColor = 'red';
    bars[rightIdx].style.backgroundColor = 'red';

    while (leftIdx <= rightIdx) {
        let pivotValue = parseInt(bars[pivotIdx].childNodes[0].innerHTML);
        let leftValue = parseInt(bars[leftIdx].childNodes[0].innerHTML);
        let rightValue = parseInt(bars[rightIdx].childNodes[0].innerHTML);
        // wait to visualize
        await new Promise((resole) => {
            setTimeout(() => {
                resole();
            }, delay);
        });

        if (leftValue > pivotValue && rightValue < pivotValue) {
            swapValue(bars, leftIdx, rightIdx);
        }

        if (leftValue <= pivotValue) {
            leftIdx += 1;
        }

        if (rightValue >= pivotIdx) {
            rightIdx -= 1;
        }
    }

    await new Promise((resole) => {
        setTimeout(() => {
            resole();
        }, delay);
    });


    swapValue(bars, pivotIdx, rightIdx);
    // set left, right back to old color
    bars[leftIdx].style.backgroundColor = 'rgb(24, 190, 255)';
    bars[rightIdx].style.backgroundColor = 'rgb(24, 190, 255)';

    const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
    if (leftSubarrayIsSmaller) {
        quickSortPartitioning(bars, startIdx, rightIdx - 1, delay);
        quickSortPartitioning(bars, rightIdx + 1, endIdx, delay);
    } else {
        quickSortPartitioning(bars, rightIdx + 1, endIdx, delay);
        quickSortPartitioning(bars, startIdx, rightIdx - 1, delay);

    }

    bars[pivotIdx].style.backgroundColor = 'rgb(24, 190, 255)';
}

function swapValue(bars, i, j) {
    let firstHeight = bars[i].style.height;
    let firstLabel = bars[i].childNodes[0].innerText;
    
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = firstHeight;

    bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    bars[j].childNodes[0].innerText = firstLabel;
}
