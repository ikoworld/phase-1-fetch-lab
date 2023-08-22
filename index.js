// index.js
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books') // Return the fetch promise
    .then(response => response.json())
    .then(books => {
      renderBooks(books); // Call the renderBooks function inside the promise chain
    })

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Just call fetchBooks without chaining here
});

