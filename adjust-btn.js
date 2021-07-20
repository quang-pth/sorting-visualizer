//  function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("new-arr-btn").disabled = true;
  document.getElementById("new-arr-btn").style.backgroundColor = "#d8b6ff";
  
  // To disable the button "Selection Sort"
  document.getElementById("selection-btn").disabled = true;
  document.getElementById("selection-btn").style.backgroundColor = "#d8b6ff";  
}

// function to enable the button
function enable() {
    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById('new-arr-btn').disabled = false;
    document.getElementById('new-arr-btn').style.backgroundColor = "#6f459e";
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("selection-btn").disabled = false;
    document.getElementById("selection-btn").style.backgroundColor = "#6f459e";
}