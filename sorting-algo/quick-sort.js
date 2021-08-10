async function quickSort(delay) {
    let bars = document.querySelectorAll(".bar");
    await quickSortPartitioning(bars, 0, bars.length - 1, delay);
    enable();
}

async function quickSortPartitioning(bars, startIdx, endIdx, delay) {
    if (startIdx >= endIdx) {
        return;
    }
    const pivotIdx = startIdx;
    let leftIdx = startIdx + 1;
    let rightIdx = endIdx;
    
    bars[pivotIdx].style.backgroundColor = 'darkblue';

    let pivotValue = parseInt(bars[pivotIdx].style.height);
    while (leftIdx <= rightIdx) {
      bars[leftIdx].style.backgroundColor = "red";
      bars[rightIdx].style.backgroundColor = "red";
      let leftValue = parseInt(bars[leftIdx].style.height);
      let rightValue = parseInt(bars[rightIdx].style.height);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
      if (leftValue > pivotValue && rightValue < pivotValue) {
        swapValue(bars, leftIdx, rightIdx);
      }

      // set left, right back to old color
      bars[leftIdx].style.backgroundColor = "rgb(24, 190, 255)";
      bars[rightIdx].style.backgroundColor = "rgb(24, 190, 255)";

      if (leftValue <= pivotValue) {
        leftIdx += 1;
      }

      if (rightValue >= pivotValue) {
        rightIdx -= 1;
      }
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    swapValue(bars, pivotIdx, rightIdx);
    
    await quickSortPartitioning(bars, startIdx, rightIdx - 1, delay);
    await quickSortPartitioning(bars, rightIdx + 1, endIdx, delay);

    await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
    bars[pivotIdx].style.backgroundColor = "rgb(49, 226, 13)";
    for (let idx = startIdx ? startIdx - 1 : startIdx; idx <= endIdx; idx++) {
        bars[idx].style.backgroundColor = "rgb(49, 226, 13)";
    }
      
}

function swapValue(bars, i, j) {
    let firstHeight = bars[i].style.height;
    
    bars[i].style.height = bars[j].style.height;
    bars[j].style.height = firstHeight;
}
