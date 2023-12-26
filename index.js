function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  //return the fetch promise from the fetchBooks function and use the then method to handle the promise
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  //if an error occurs while fetching the books, we log the error to the console and return an empty array to prevent further execution
  .catch(error => {
    console.error('Error fetching books:', error)
    return []
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
  fetchBooks().then(books => {
    renderBooks(books)
  });
});
