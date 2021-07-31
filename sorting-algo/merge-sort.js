async function mergeSort(delay) {
  const bars = document.querySelectorAll(".bar");
  if (bars.length === 1) return;
  await runMergeSort(bars, 0, bars.length - 1, delay);
  enable();
}

async function runMergeSort(bars, startIdx, endIdx, delay) {
  if (startIdx >= endIdx) return;
  const middleIdx = Math.floor((endIdx + startIdx) / 2);
  await runMergeSort(bars, startIdx, middleIdx, delay);
  await runMergeSort(bars, middleIdx + 1, endIdx, delay);
  await mergeSortedArray(bars, startIdx, middleIdx, endIdx, delay);
}

async function mergeSortedArray(bars, leftArrIdx, middleIdx, endIdx, delay) {
  const leftHalf = [];
  const rightHalf = [];

  for (let idx = leftArrIdx; idx < middleIdx + 1; idx++) {
    leftHalf.push(parseInt(bars[idx].style.height));
  }
  for (let idx = middleIdx + 1; idx < endIdx + 1; idx++) {
    rightHalf.push(parseInt(bars[idx].style.height));
  }

  const sortedArray = new Array(leftHalf.length + rightHalf.length);
  let currentIdx = 0;
  let sourceArrIdx = leftArrIdx;
  let rightArrIdx = middleIdx + 1;
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx <= leftHalf.length - 1 && rightIdx <= rightHalf.length - 1) {
    // set color
    bars[leftArrIdx].style.backgroundColor = "darkblue";
    bars[rightArrIdx].style.backgroundColor = "darkblue";

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    const leftHeight = leftHalf[leftIdx];
    const rightHeight = rightHalf[rightIdx];

    if (leftHeight <= rightHeight) {
      sortedArray[currentIdx] = leftHeight;
      bars[sourceArrIdx].style.height = `${leftHeight}px`;
      bars[sourceArrIdx].childNodes[0].innerHTML = leftHeight / 3;
      bars[leftArrIdx].style.backgroundColor = "rgb(24, 190, 255)";

      leftIdx += 1;
      leftArrIdx += 1;
    } else {
      sortedArray[currentIdx] = rightHeight;
      bars[sourceArrIdx].style.height = `${rightHeight}px`;
      bars[sourceArrIdx].childNodes[0].innerHTML = rightHeight / 3;
      bars[rightArrIdx].style.backgroundColor = "rgb(24, 190, 255)";

      rightIdx += 1;
      rightArrIdx += 1;
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    if (leftHeight <= rightHeight) {
      bars[rightArrIdx].style.backgroundColor = "rgb(24, 190, 255)";
    } else {
      bars[leftArrIdx].style.backgroundColor = "rgb(24, 190, 255)";
    }

    currentIdx += 1;
    sourceArrIdx += 1;
  }

  bars[sourceArrIdx].style.backgroundColor = "darkblue";
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

  while (leftIdx < leftHalf.length) {
    sortedArray[currentIdx] = leftHalf[leftIdx];
    bars[sourceArrIdx].style.height = `${leftHalf[leftIdx]}px`;
    bars[sourceArrIdx].childNodes[0].innerHTML = leftHalf[leftIdx] / 3;

    leftIdx += 1;
    currentIdx += 1;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[sourceArrIdx].style.backgroundColor = "rgb(24, 190, 255)";
    sourceArrIdx += 1;
  }

  while (rightIdx < rightHalf.length) {
    sortedArray[currentIdx] = rightHalf[rightIdx];
    bars[sourceArrIdx].style.height = `${rightHalf[leftIdx]}px`;
    bars[sourceArrIdx].childNodes[0].innerHTML = rightHalf[rightIdx] / 3;

    rightIdx += 1;
    currentIdx += 1;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[sourceArrIdx].style.backgroundColor = "rgb(24, 190, 255)";
    sourceArrIdx += 1;
  }
}