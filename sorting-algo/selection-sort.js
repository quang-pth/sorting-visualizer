async function SelectionSort(delay = 50) {
    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        let min_idx = i;
        // provide darkblue color for ith bar
        bars[i].style.backgroundColor = 'darkblue';
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'red';
            // pause execution to generate visualization
            await new Promise((resole) => {
                setTimeout(() => {
                    resole();
                }, delay);
            });
            // 
            let val1 = parseInt(bars[j].childNodes[0].innerHTML);
            let val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
            
            // Compare val1 & val2
            if (val1 < val2) {
                if (min_idx !== i) {
                    // Provide skyblue color to the (min-idx)th bar
                    bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {
                // Provide skyblue color to the jth bar
                bars[j].style.backgroundColor = "rgb(24, 190, 255)";
            }
        }
            // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        // min_idx value label
        var temp2 = bars[min_idx].childNodes[0].innerText;
        // swap actual height
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        // swap label
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
        
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, delay);
        });

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";

    }
    enable();
    
}
