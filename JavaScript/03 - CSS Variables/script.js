// select all the input in class controls
const inputs = document.querySelectorAll('.controls input');
const width = document.getElementById('width');

// The dataset read property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. 
function handleUpdate() {
  // console.log(this.value);
  // console.log(this.name);
  // console.log(this.dataset);// dataset selects all the attribute start with data-
  const suffix = this.dataset.sizing || ''; // px
   //? update the value of css variable
  // console.log(document.documentElement.style.cssText);
  
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

width.textContent = '400';
console.log(width);
inputs.forEach(input => input.addEventListener('change', handleUpdate)); //
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// inputs.forEach(input => input.addEventListener('keyup', handleUpdate));