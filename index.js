
// function fetchBooks() {
//   // To pass the tests, don't forget to return your fetch!
//   // const resultResturned = fetch()
//   let resultToBeReturned = fetch("https://anapioficeandfire.com/api/books") //fetches the requested data from the API
//   .then((resp) => resp.json()) //rendering the response as plain old JS Oblect (POJO). 
//   .then((data) => renderBooks(data)) // prints the JS object to our console
//   .catch((error) => `ERROR => ${console.error(error.message)}`)
//   return resultToBeReturned;
// }
 

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks(){
  return fetch("https://anapioficeandfire.com/api/books")
  .then((res) => res.json())
  .then((json) => renderBooks(json)) 
 
}

function renderBooks(books){
  let main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  })
}
