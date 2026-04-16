import { getNotes, saveNotes } from './notes.js';
import { renderNotes } from './ui.js';


let notes = getNotes();
let search = '';

renderNotes(notes, search);

// Add note
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();

  const input = document.querySelector('#input');

  notes.push({
    id: Date.now(),
    text: input.value
  });

  saveNotes(notes);
  renderNotes(notes, search);

  input.value = '';
});

// Delete note (event delegation)
document.querySelector('#list').addEventListener('click', (e) => {
  const id = Number(e.target.dataset.id);

  notes = notes.filter((n) => n.id !== id);

  saveNotes(notes);
  renderNotes(notes, search);
});

// Search
document.querySelector('#search').addEventListener('input', (e) => {
  search = e.target.value;
  renderNotes(notes, search);
});