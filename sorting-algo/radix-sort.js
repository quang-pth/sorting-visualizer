async function radixSort(delay) {
    const bars = document.querySelectorAll('.bar');
    if (bars.length === 0) return bars;
	
    let maxNumber = -Infinity;
    for (let idx = 0; idx < bars.length; idx++) {
        maxNumber = Math.max(maxNumber, parseInt(bars[idx].style.height));
    }
	let digit = 0;
	while (Math.floor(maxNumber / (10 ** digit)) > 0) {
        await countingSort(bars, digit, delay, maxNumber);
		digit += 1;
    }
    enable();
}

// This solution would not work with input contains negative number
async function countingSort(bars, digit, delay, maxNumber) {
    const sortedArray = new Array(bars.length).fill(0);
	const countsArray = new Array(10).fill(0);
	const digitColumn = 10 ** digit;
	for (const number of bars) {
		const countIdx = Math.floor(parseInt(number.style.height) / digitColumn) % 10;
		countsArray[countIdx] += 1;
    }
    // 	Modify counts array to get the furthest right positions
	for (let idx = 1; idx < countsArray.length; idx++) {
		countsArray[idx] += countsArray[idx - 1];
    }
	// 	Sort array base on digit
	for (let idx = bars.length - 1; idx >= 0; idx--) {
		const countIdx = Math.floor(parseInt(bars[idx].style.height) / digitColumn) % 10;
		countsArray[countIdx] -= 1;
		const sortedIdx = countsArray[countIdx];
		sortedArray[sortedIdx] = parseInt(bars[idx].style.height);
    }
    const lastSort = Math.floor(maxNumber / (10 ** digit)) < 10;
	// 	Replace original array in place
    for (let idx = 0; idx < bars.length; idx++) {
        bars[idx].style.backgroundColor = 'red';
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, delay);
        });
        bars[idx].style.height = `${sortedArray[idx]}px`;
        bars[idx].style.backgroundColor = lastSort ? "rgb(49, 226, 13)" : 'rgb(24, 190, 255)';
    }
}