// INPUT BOOK
const headBar = document.querySelector('.head_bar');
const textHeader = document.createElement('h1');
textHeader.textContent = 'Bookshelf Apps';
textHeader.classList.add('head_bar_title');
headBar.append(textHeader);

const inputSection = document.querySelector('.input_section');
const textInputSection = document.createElement('h2');
textInputSection.textContent = 'Masukkan Buku Baru';

function createInput(id, type, label) {
  const inputElement = document.createElement('input');
  inputElement.id = id;
  inputElement.type = type;
  inputElement.required = true;

  const labelElement = document.createElement('label');
  labelElement.htmlFor = id;
  labelElement.textContent = label;

  const container = document.createElement('div');
  container.classList.add('input');
  container.append(labelElement);
  container.append(inputElement);

  return container;
}

const inputTitle = createInput('inputBookTitle', 'text', 'Judul');
const inputBookAuthor = createInput('inputBookAuthor', 'text', 'Penulis');
const inputBookYear = createInput('inputBookYear', 'number', 'Tahun');

const labelIsCompleted = document.createElement('label');
labelIsCompleted.htmlFor = 'inputBookIsComplete';
labelIsCompleted.textContent = 'Selesai dibaca';

const inputIsCompleted = document.createElement('input');
inputIsCompleted.id = 'inputBookIsComplete';
inputIsCompleted.type = 'checkbox';

const inputInlineSection = document.createElement('div');
inputInlineSection.classList.add('input_inline');
inputInlineSection.appendChild(labelIsCompleted);
inputInlineSection.appendChild(inputIsCompleted);

const buttonElement = document.createElement('button');
buttonElement.id = 'bookSubmit';
buttonElement.type = 'submit';
buttonElement.textContent = 'Masukkan buku ke rak ';

const formInputBook = document.getElementById('inputBook');
formInputBook.append(inputTitle, inputBookYear, inputBookAuthor, inputInlineSection, buttonElement);
formInputBook.parentNode.insertBefore(textInputSection, formInputBook);

const spanElement = document.createElement('span');
spanElement.textContent = 'Belum Selesai dibaca';
buttonElement.appendChild(spanElement);

// SEARCH SECTION
const searchSection = document.querySelector('.search_section');
const textSearch = document.createElement('h2');
const formSearchBook = document.querySelector('#searchBook');

function createInputSearch(id, type, placeholder) {
  const inputSearch = document.createElement('input');
  inputSearch.id = id;
  inputSearch.type = type;
  inputSearch.placeholder = placeholder;

  formSearchBook.append(inputSearch);

  return inputSearch;
}

const searchBook = createInputSearch('searchBookTitle', 'text', 'Search');

textSearch.textContent = 'Cari Buku (Optional)';
formSearchBook.appendChild(searchBook);
formSearchBook.parentNode.insertBefore(textSearch, formSearchBook);

// INCOMPLETE & COMPLETE BOOKSHELF LIST
const bookList = document.querySelector('.book_shelf');
const textInCompleteBook = document.createElement('h2');
const textCompleteBook = document.createElement('h2');
const inCompleteSection = document.getElementById('incompleteBookshelfList');
const completeSection = document.getElementById('completeBookshelfList');
textInCompleteBook.textContent = 'Belum selesai dibaca';
textCompleteBook.textContent = 'Selesai dibaca';
inCompleteSection.parentNode.insertBefore(textInCompleteBook, inCompleteSection);
completeSection.parentNode.insertBefore(textCompleteBook, completeSection);

// const books = [];
// const RENDER_EVENT = 'render-book';
// const STORAGE_KEY = 'BOOKSHELF_APPS';

// function generateId() {
//   return +new Date();
// }

// function generateBookObject(id, title, author, year, isCompleted) {
//   return {
//     id,
//     title,
//     author,
//     year,
//     isCompleted,
//   };
// }

// function findBook(bookId) {
//   for (const bookItem of books) {
//     if (bookItem.id === bookId) {
//       return bookItem;
//     }
//   }
//   return null;
// }

// function findIndexBook(bookId) {
//   for (const indexBook in books) {
//     if (books[indexBook].id === bookId) {
//       return indexBook;
//     }
//   }
//   return -1;
// }

// function isStorageExist() {
//   if (typeof Storage === undefined) {
//     alert('Browser tidak mendukung Local Storage');
//     return false;
//   }
//   return true;
// }

// function saveData() {
//   if (isStorageExist()) {
//     const parsed = JSON.stringify(books);
//     localStorage.setItem(STORAGE_KEY, parsed);
//     document.dispatchEvent(new Event(SAVED_EVENT));
//   }
// }

// function loadDataFromStorage() {
//   const serializedData = localStorage.getItem(STORAGE_KEY);
//   const data = JSON.parse(serializedData);

//   if (data !== null) {
//     for (const book of data) {
//       books.push(book);
//     }
//   }

//   document.dispatchEvent(new Event(RENDER_EVENT));
// }

// function addTaskToCompleted(bookId) {
//   const bookTarget = findBook(bookId);

//   if (bookTarget === null) return;

//   bookTarget.isCompleted = true;
//   document.dispatchEvent(new Event(RENDER_EVENT));
//   saveData();
// }

// function undoTaskToCompleted(bookId) {
//   const bookTarget = findBook(bookId);

//   if (bookTarget === null) return;

//   bookTarget.isCompleted = false;
//   document.dispatchEvent(new Event(RENDER_EVENT));
//   saveData();
// }

// function removeTaskToCompleted(bookId) {
//   const bookTarget = findIndexBook(bookId);

//   if (bookTarget === -1) return;

//   books.splice(bookTarget, 1);
//   document.dispatchEvent(new Event(RENDER_EVENT));
//   saveData();
// }

// function addBook() {
//   const bookTitle = document.getElementById('inputBookTitle').value;
//   const bookAuthor = document.getElementById('inputBookAuthor').value;
//   const bookYear = parseInt(document.getElementById('inputBookYear').value);
//   const bookIsComplete = document.getElementById('inputBookIsComplete').checked;

//   const generateID = generateId();
//   const bookObject = generateBookObject(generateID, bookTitle, bookAuthor, bookYear, bookIsComplete);
//   books.push(bookObject);

//   document.dispatchEvent(new Event(RENDER_EVENT));
//   saveData();
// }

// function makeBook(bookObject) {
//   const textTitle = document.createElement('h3');
//   textTitle.innerText = bookObject.title;

//   const textAuthor = document.createElement('p');
//   textAuthor.innerText = bookObject.author;

//   const textYear = document.createElement('p');
//   textYear.innerText = bookObject.year;

//   const containerButton = document.createElement('div');
//   containerButton.classList.add('action');

//   const container = document.createElement('article');
//   container.classList.add('book_item');
//   container.append(textTitle, textAuthor, textYear, containerButton);
//   container.setAttribute('id', `book-${bookObject.id}`);

//   if (bookObject.isCompleted) {
//     const completeButton = document.createElement('button');
//     completeButton.classList.add('green');
//     completeButton.innerText = 'Belum selesai di Baca';

//     completeButton.addEventListener('click', () => {
//       undoTaskToCompleted(bookObject.id);
//       searchBookDisplay();
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('red');
//     deleteButton.innerText = 'Hapus buku';

//     deleteButton.addEventListener('click', () => {
//       removeTaskToCompleted(bookObject.id);
//       searchBookDisplay();
//     });

//     containerButton.append(completeButton, deleteButton);
//   } else {
//     const unCompleteButton = document.createElement('button');
//     unCompleteButton.classList.add('green');
//     unCompleteButton.innerText = 'Selesai di Baca';

//     unCompleteButton.addEventListener('click', () => {
//       addTaskToCompleted(bookObject.id);
//       searchBookDisplay();
//     });

//     const deleteButton = document.createElement('button');
//     deleteButton.classList.add('red');
//     deleteButton.innerText = 'Hapus Buku';

//     deleteButton.addEventListener('click', () => {
//       removeTaskToCompleted(bookObject.id);
//       searchBookDisplay();
//     });

//     containerButton.append(unCompleteButton, deleteButton);
//   }
//   return container;
// }

// function searchBookDisplay() {
//   const inputSearch = document.getElementById('searchBookTitle');
//   const textSearch = inputSearch.value.toLowerCase();

//   const inCompletedBook = document.getElementById('incompleteBookshelfList');
//   inCompletedBook.innerHTML = '';

//   const completedBook = document.getElementById('completeBookshelfList');
//   completedBook.innerHTML = '';

//   for (const bookItem of books) {
//     const title = bookItem.title.toLowerCase();

//     if (title.includes(textSearch)) {
//       const bookElement = makeBook(bookItem);
//       if (!bookItem.isCompleted) {
//         inCompletedBook.append(bookElement);
//       } else {
//         completedBook.append(bookElement);
//       }
//     }
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const submitForm = document.getElementById('inputBook');
//   const inputSearch = document.getElementById('searchBook');

//   submitForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     addBook();
//   });

//   inputSearch.addEventListener('input', () => {
//     searchBookDisplay();
//   });

//   if (isStorageExist()) {
//     loadDataFromStorage();
//   }
// });

// document.addEventListener(RENDER_EVENT, () => {
//   const inCompletedBook = document.getElementById('incompleteBookshelfList');
//   inCompletedBook.innerHTML = '';

//   const completedBook = document.getElementById('completeBookshelfList');
//   completedBook.innerHTML = '';

//   for (const bookItem of books) {
//     const bookElement = makeBook(bookItem);
//     if (!bookItem.isCompleted) {
//       inCompletedBook.append(bookElement);
//     } else {
//       completedBook.append(bookElement);
//     }
//   }
// });
