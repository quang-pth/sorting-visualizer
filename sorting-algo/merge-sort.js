async function mergeSort(delay) {
  const bars = document.querySelectorAll(".bar");
  if (bars.length === 1) return;
  const cloneBars = [];
  for (let idx = 0; idx < bars.length; idx++) {
    cloneBars.push(bars[idx].cloneNode());
  }
  await runMergeSort(bars, 0, bars.length - 1, delay, cloneBars);
  enable();
}

async function runMergeSort(bars, startIdx, endIdx, delay, cloneBars) {
  if (startIdx >= endIdx) return;
  const middleIdx = Math.floor((endIdx + startIdx) / 2);
  await runMergeSort(bars, startIdx, middleIdx, delay, cloneBars);
  await runMergeSort(bars, middleIdx + 1, endIdx, delay, cloneBars);
  await mergeSortedArray(bars, startIdx, middleIdx, endIdx, delay, cloneBars);
}

async function mergeSortedArray(bars, leftArrIdx, middleIdx, endIdx, delay, cloneBars) {
  const leftHalf = [];
  const rightHalf = [];
  const sortedBars = [];

  const isFinalSort = leftArrIdx === 0 && endIdx === cloneBars.length - 1;

  for (let idx = leftArrIdx; idx < middleIdx + 1; idx++) {
    leftHalf.push(parseInt(cloneBars[idx].style.height));
  }
  for (let idx = middleIdx + 1; idx < endIdx + 1; idx++) {
    rightHalf.push(parseInt(cloneBars[idx].style.height));
  }

  let sourceArrIdx = leftArrIdx;
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx <= leftHalf.length - 1 && rightIdx <= rightHalf.length - 1) {
    const leftHeight = leftHalf[leftIdx];
    const rightHeight = rightHalf[rightIdx];
    if (leftHeight <= rightHeight) {
      sortedBars.push(leftHeight);
      cloneBars[sourceArrIdx].style.height = `${leftHeight}px`;
      leftIdx += 1;
    } else {
      sortedBars.push(rightHeight);
      cloneBars[sourceArrIdx].style.height = `${rightHeight}px`;
      rightIdx += 1;
    }
    sourceArrIdx += 1;
  }

  while (leftIdx < leftHalf.length) {
    sortedBars.push(leftHalf[leftIdx]);
    cloneBars[sourceArrIdx].style.height = `${leftHalf[leftIdx]}px`;
    leftIdx += 1;
    sourceArrIdx += 1;
  }

  while (rightIdx < rightHalf.length) {
    sortedBars.push(rightHalf[rightIdx]);
    cloneBars[sourceArrIdx].style.height = `${rightHalf[rightIdx]}px`;
    rightIdx += 1;
    sourceArrIdx += 1;
  }

  const sortedLeft = sortedBars.slice(0, middleIdx + 1);
  const sortedRight = sortedBars.slice(middleIdx + 1);

  // animate on original bars
  let srcLeftIdx = leftArrIdx;
  let srcRightIdx = middleIdx + 1;
  let currentIdx = 0;

  while (currentIdx < sortedLeft.length && currentIdx < sortedRight.length) {
    bars[srcLeftIdx].style.backgroundColor = 'red';
    bars[srcRightIdx].style.backgroundColor = 'red';

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[srcLeftIdx].style.height = `${sortedLeft[currentIdx]}px`;
    bars[srcLeftIdx].childNodes[0].innerHTML = sortedLeft[currentIdx] / 3;

    bars[srcRightIdx].style.height = `${sortedRight[currentIdx]}px`;
    bars[srcRightIdx].childNodes[0].innerHTML = sortedRight[currentIdx] / 3;
    
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[srcLeftIdx].style.backgroundColor = isFinalSort
    ? "rgb(49, 226, 13)"
    : "rgb(24, 190, 255)";
    bars[srcRightIdx].style.backgroundColor = isFinalSort
    ? "rgb(49, 226, 13)"
      : "rgb(24, 190, 255)";
    
    srcLeftIdx++;
    srcRightIdx++;
    currentIdx++;
  }

  let remainIdx = srcLeftIdx <= middleIdx ? srcLeftIdx : srcRightIdx;

  while (currentIdx < sortedLeft.length) {
    bars[remainIdx].style.backgroundColor = 'red';
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
    bars[remainIdx].style.height = `${sortedLeft[currentIdx]}px`;
    bars[remainIdx].childNodes[0].innerHTML = sortedLeft[currentIdx] / 3;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[remainIdx].style.backgroundColor = isFinalSort
    ? "rgb(49, 226, 13)"
    : "rgb(24, 190, 255)";
    
    currentIdx++;
    remainIdx++;
  }

  while (currentIdx < sortedRight.length) {
    bars[remainIdx].style.backgroundColor = 'red';
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
    bars[remainIdx].style.height = `${sortedRight[currentIdx]}px`;
    bars[remainIdx].childNodes[0].innerHTML = sortedRight[currentIdx] / 3;

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    bars[remainIdx].style.backgroundColor = isFinalSort
    ? "rgb(49, 226, 13)"
    : "rgb(24, 190, 255)";
    
    currentIdx++;
    remainIdx++;
  }

}

  
    