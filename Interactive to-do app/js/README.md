In following code :
<li data-id="2">Item 2</li>

list.addEventListener("click", (e) => {
  const id = e.target.dataset.id;})

e.target.dataset.id  // "2"

data-id="123"
data-name="abc"

Access in JS:

element.dataset.id
element.dataset.name