async function BubbleSort(delay) {
    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        // provide darkblue color for ith bar
        bars[i].style.backgroundColor = 'red';
        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.backgroundColor = 'red';
            // pause execution to generate visualization
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, delay);
            });
            // 
            let secondValue = parseInt(bars[j].style.height);
            let firstValue = parseInt(bars[i].style.height);
            
            if (secondValue < firstValue) {
                let firstHeight = bars[i].style.height;
                
                bars[i].style.height = bars[j].style.height;
                bars[j].style.height = firstHeight;
                
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                    }, delay);
                });
            }

            // bars[i].style.backgroundColor = "rgb(24, 190, 255)";
            bars[j].style.backgroundColor = "rgb(24, 190, 255)";
        }
        
        
        bars[i].style.backgroundColor = "rgb(49, 226, 13)";
    }

    enable();
}