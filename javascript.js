// Variables
let myLibrary = {};

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${
        this.read === true ? `read` : `not read yet`
      }`
    );
  }
}

// NEW BOOK

// Create Card
const createCard = function (title, author, pages, read) {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  div.className = "book";
  console.log();
  div.id = `${title.replace(/\s/g, "")}`;
  if (read === true) {
    div.classList.add("read");
  }
  main.appendChild(div);
  const h3 = document.createElement("h3");
  h3.className = `title`;
  h3.textContent = `${title}`;
  div.appendChild(h3);

  const button = document.createElement("button");
  button.className = `card--button`;
  button.classList.add("button--read");
  button.textContent = read === true ? `NOT READ` : `READ`;
  if (read === true) {
    div.style.backgroundColor = `#2f9e44`;
  }
  button.setAttribute(`onclick`, `readFunction(this)`);
  h3.appendChild(button);

  const p = document.createElement("p");
  p.className = `author`;
  p.textContent = `Author: ${author}`;
  div.appendChild(p);

  const p2 = document.createElement("p");
  p2.textContent = `Pages: ${pages}`;
  p2.className = `pages`;
  div.appendChild(p2);

  const button1 = document.createElement("button");
  button1.className = `card--button`;
  button1.classList.add("button--remove");
  button1.textContent = `Remove`;
  button1.setAttribute("onclick", "removeCard(this)");
  p2.appendChild(button1);
};

function readFunction(button) {
  const parent = button.parentElement.parentElement;
  const backgroundColor =
    button.parentElement.parentElement.style.backgroundColor;
  backgroundColor === `rgb(47, 158, 68)`
    ? (parent.style.backgroundColor = "")
    : (parent.style.backgroundColor = `#2f9e44`);

  button.textContent === `NOT READ`
    ? (button.textContent = `READ`)
    : (button.textContent = `NOT READ`);
}

function removeCard(button) {
  const main = document.querySelector("main");
  delete myLibrary[button.parentNode.parentNode.id];
  main.removeChild(button.parentElement.parentElement);
}

// Open Modal
const bookForm = document.querySelector("aside");
const addBook = document.querySelector(".add--book");
addBook.addEventListener("click", function () {
  bookForm.classList.toggle("--hidden");
});
// Close modal
const bookFormClose = document.querySelector(".close--modal");
bookFormClose.addEventListener("click", function () {
  bookForm.classList.toggle("--hidden");
});

// Submit Book
const submitBook = document.querySelector(".submit--book");
const inputTitle = document.getElementById("new--book--title");
const inputAuthor = document.getElementById("new--book--author");
const inputPages = document.getElementById("new--book--pages");
const inputRead = document.getElementById("new--book--read");
submitBook.addEventListener("click", function () {
  if (
    inputAuthor.value !== "" &&
    inputTitle.value !== "" &&
    inputPages.value !== ""
  ) {
    const myLibraryTitle = inputTitle.value;
    myLibrary[`${myLibraryTitle.replace(/\s/g, "")}`] = new Book(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputRead.checked
    );
    bookForm.classList.toggle("--hidden");
    createCard(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputRead.checked
    );
  }
});

// THEME

const root = document.documentElement;
root.className = `dark`;
function setTheme() {
  root.classList.toggle(`dark`);
  root.classList.toggle(`light`);
}

const themeToggle = document.getElementById("theme");
themeToggle.addEventListener("click", setTheme);
