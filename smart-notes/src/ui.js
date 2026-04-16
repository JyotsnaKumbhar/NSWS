export const renderNotes = (notes, search) => {
  const list = document.querySelector('#list');
  list.innerHTML = '';

  const filtered = notes.filter((n) =>
    n.text.toLowerCase().includes(search.toLowerCase())
  );

  filtered.forEach((note) => {
    const li = document.createElement('li');

    li.innerHTML = `
      ${note.text}
      <button data-id="${note.id}">Delete</button>
    `;

    list.appendChild(li);
  });
};