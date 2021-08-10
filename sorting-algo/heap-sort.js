async function heapSort(delay) {
  const bars = document.querySelectorAll(".bar");
  await buildMaxHeap(bars, delay);

  for (let idx = bars.length - 1; idx >= 0; idx--) {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
    swapValue(bars, 0, idx);
    bars[idx].style.backgroundColor = 'rgb(49, 226, 13)';
    await siftDown(bars, 0, idx - 1, delay);
  }

  enable();
}

async function buildMaxHeap(bars, delay) {
  const firstParentIdx = Math.floor((bars.length - 1) / 2);
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
    await siftDown(bars, currentIdx, bars.length - 1, delay);
  }
}

async function siftDown(heapBars, currentIdx, endIdx, delay) {
  let childOneIdx = currentIdx * 2 + 1;

  while (childOneIdx <= endIdx) {
    const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;

    let idxToSwap = null;
    if (childOneIdx !== -1 && parseInt(heapBars[childOneIdx].style.height) < (childTwoIdx !== -1 ? parseInt(heapBars[childTwoIdx].style.height) : Infinity)) {
      idxToSwap = childTwoIdx;
    } else {
      idxToSwap = childOneIdx;
    }

    if (idxToSwap !== -1) {
      heapBars[idxToSwap].style.backgroundColor = "red";
    }
    heapBars[currentIdx].style.backgroundColor = "red";

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    if (parseInt(heapBars[currentIdx].style.height) < (idxToSwap !== -1 ? parseInt(heapBars[idxToSwap].style.height) : -Infinity)) {
      swapValue(heapBars, currentIdx, idxToSwap);

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });

      if (idxToSwap !== -1) {
        heapBars[idxToSwap].style.backgroundColor = "rgb(24, 190, 255)";
      }
      heapBars[currentIdx].style.backgroundColor = "rgb(24, 190, 255)";

      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
    } else {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, delay);
      });
      if (idxToSwap !== -1) {
        heapBars[idxToSwap].style.backgroundColor = "rgb(24, 190, 255)";
      }
      heapBars[currentIdx].style.backgroundColor = "rgb(24, 190, 255)";
      return;
    }
  }
}

function swapValue(bars, i, j) {
  const temp1 = bars[j].style.height;
  bars[j].style.height = bars[i].style.height;
  bars[i].style.height = temp1;
}
