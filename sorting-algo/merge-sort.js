async function mergeSort(array) {
  if (array. length === 1) return;
  await runMergeSort(array, 0, array.length - 1);
  return array;
}

function runMergeSort(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  const middleIdx = Math.floor((endIdx + startIdx) / 2);

  await runMergeSort(array, startIdx, middleIdx);
  await runMergeSort(array, middleIdx + 1, endIdx);
  await mergeSortedArray(array, startIdx, middleIdx, endIdx);
}


// 0 1 2 3 4
// 1 4 5 2 6
async function mergeSortedArray(array, leftArrIdx, middleIdx, endIdx) {
  const leftHalf = array.slice(leftArrIdx, middleIdx + 1);
  const rightHalf = array.slice(middleIdx + 1, endIdx + 1);
  const sortedArray = new Array(leftHalf.length + rightHalf.length);
  let currentIdx = 0;
  let sourceArrIdx = leftArrIdx;
  let leftIdx = 0;
  let rightIdx = 0;
  // let currentArrIdx = leftArrIdx;
  
  while (leftIdx <= leftHalf.length - 1 && rightIdx <= rightHalf.length - 1) {
    if (leftHalf[leftIdx] <= rightHalf[rightIdx]) {
      sortedArray[currentIdx] = leftHalf[leftIdx];
      leftIdx += 1;
    } else {
      sortedArray[currentIdx] = rightHalf[rightIdx];
      rightIdx += 1;
    }
    array[sourceArrIdx] = sortedArray[currentIdx];
    currentIdx += 1;
    sourceArrIdx += 1;
  }
  while (leftIdx < leftHalf.length) {
    sortedArray[currentIdx] = leftHalf[leftIdx];
    array[sourceArrIdx] = sortedArray[currentIdx];
    leftIdx += 1;
    currentIdx += 1;
    sourceArrIdx += 1;
  }
  while (rightIdx < rightHalf.length) {
    sortedArray[currentIdx] = rightHalf[rightIdx];
    array[sourceArrIdx] = sortedArray[currentIdx];
    rightIdx += 1;
    currentIdx += 1;
    sourceArrIdx += 1;
}


}

console.log(mergeSort([4, 3, 2, 1, 0, 0, 2, 0, -1 , -1, 0, 4]));