//  function to disable the button
function disable() {
  // To disable the button "Generate New Array"
  document.getElementById("new-arr-btn").disabled = true;
  document.getElementById("new-arr-btn").style.backgroundColor = "#d8b6ff";

  // To disable the button "Selection Sort"
  const btnToDisable = document.querySelectorAll(".sorting-btn");
  for (const btn of btnToDisable) {
    btn.disabled = true;
    btn.style.backgroundColor = "#d8b6ff";
  }

  document.getElementById("sort-speed").disabled = true;
}

// function to enable the button
function enable() {
  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("new-arr-btn").disabled = false;
  document.getElementById("new-arr-btn").style.backgroundColor = "#6f459e";
  // To enable the button "Selection Sort"
  const btnToEnable = document.querySelectorAll(".sorting-btn");
  for (const btn of btnToEnable) {
    btn.disabled = false;
    btn.style.backgroundColor = "#6f459e";
  }
  document.getElementById("sort-speed").disabled = false;
}