// LIBRARY CONSTRUCTOR (Stores NEW BOOKS)
let myLibrary = [];

// BOOK CONSTRUCTOR (Creates New Books)
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// NEW BOOK BUTTON - CALL & DISPLAY FORM

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

// FORM INPUT PULL (Linked to HTML DOM & JS function's [myLibrary] [render])

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

// NEW BOOK SUBMIT-BUTTON (Linked to JS function [addBookToLibrary] & HTML Form via DOM) - Event Listener Added to form.
document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

// DISPLAY NEW BOOK ON WEB (Linked to HTML DOM & JS function [myLibrary])

function render() {
  let libraryElement = document.querySelector("#library");

  libraryElement.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    // CSS
    bookElement.setAttribute("class", "book-card");
    bookElement.innerHTML = `
    <div class="card-header">
  <h3 class="tittle">${book.title}</h3>
  <h5 class="author">by ${book.author}</h5>
</div>

<div class="card-body">
  <p>${book.pages} pages</p>
  <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
  <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
</div>
<button class="toggle-read-btn"  onclick="toggleRead(${i})">Toggle Read</button>
</div>
    `;
    libraryElement.appendChild(bookElement);
  }
}

// REMOVE BUTTON (To remove Books)

function removeBook(i) {
  myLibrary.splice(i, 1);
  render();
}
// Create Prototype Toggle function

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Invoking constructor "Book" prototype method "toggleRead"

function toggleRead(i) {
  myLibrary[i].toggleRead();
  render();
}
