const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

 /*
   ? The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
   * For example, this can be useful when:
   * Clicking on a "Submit" button, prevent it from submitting a form
   * Clicking on a link, prevent the link from following the URL
   
   Storage objects are simple key-value stores, similar to objects, but they stay intact through page loads. 
   The keys and the values are always strings
   (note that, as with objects, integer keys will be automatically converted to strings)

* Storing data:
  const myObj = { name: "John", age: 31, city: "New York" };
  const myJSON = JSON.stringify(myObj);
  localStorage.setItem("testJSON", myJSON);

* Retrieving data:
  let text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  document.getElementById("demo").innerHTML = obj.name;
 */

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items)); // (key, value)
  // The reset() method resets the values of all elements in a form (same as clicking the Reset button).
  // 
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
  }).join('');
}

function toggleDone(e) {
  console.log(e.target);
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  // update localStorage
  localStorage.setItem('items', JSON.stringify(items)); 
  // populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);