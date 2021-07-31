function heapSort(array) {
    buildMaxHeap(array);
    for (let idx = array.length - 1; idx >= 0; idx--) {
        swapValue(array, 0, idx);
        siftDown(array, 0, idx - 1);
    }
    return array;
}

function buildMaxHeap(array) {
    const firstParentIdx = Math.floor((array.length - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(array, currentIdx, array.length - 1);
    }
}

function siftDown(heap, currentIdx, endIdx) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap = null;

        if (childOneIdx !== -1 && heap[childOneIdx] < heap[childTwoIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }

        if (heap[currentIdx] < heap[idxToSwap]) {
            swapValue(heap, currentIdx, idxToSwap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}

function swapValue(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}