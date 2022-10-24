
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  // check if they had the shift key down and check that they are checking it
  // console.log(this.checked);
  let inBetween = false;
  
  if (e.shiftKey && this.checked) {
    // loop over every single checkbox
    // console.log( inBetween );
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log( 'Starting to check them in between' );
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
    lastChecked = this;
  }
  lastChecked = this;
  // console.log(lastChecked);
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
});

