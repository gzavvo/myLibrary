const myLibrairy = {
  books: [
    {
      title: "L’étranger",
      author: "Albert Camus",
      read: true,
      rating: "5",
    },
    {
      title: "Les mots",
      author: "Jean-Paul Sartre",
      read: true,
      rating: "5",
    },
    {
      title: "Les pierres sauvages",
      author: "Fernand Pouillon",
      read: false,
      rating: "4",
    }
  ],
  init: function() {
    this.cacheDom();
    this.render();
    this.bindEvents();
  },
  cacheDom: function() {
    this.tbody = document.querySelector("tbody");
    this.form = document.querySelector("#form");
    this.addButton = document.getElementById("addButton");
  },
  bindEvents: function() {
    this.addButton.addEventListener("click", this.openForm);
  },
  render: function() {
    // clear body table
    this.removeChildren(this.tbody);
    // clear form
    this.removeChildren(this.form);
    // display addButton
    document.querySelector("nav").style.display = "block";
    // render table
    this.books.forEach(book => this.addRow(book));
  },
  addBook: function() {
    this.render();
  },
  deleteBook: function() {
    this.render();
  },
  removeChildren: function(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },
  addRow: function(book) {
    let newRow = document.createElement("tr");
    let newTitle = document.createElement("td");
    let newAuthor = document.createElement("td");
    let newRead = document.createElement("td");
    let newRating = document.createElement("td");
    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newRead.textContent = book.read;
    newRating.textContent = book.rating;

    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newRead);
    newRow.appendChild(newRating);

    document.querySelector("tbody").appendChild(newRow);
  },
  openForm: function() {
    // hide addButton
    document.querySelector("nav").style.display = "none";

    // select elements
    let formDiv = document.querySelector("#form");

    // create elements
    let form = document.createElement("form");

    let titleDiv = document.createElement("div");
    let titleLabel = document.createElement("label");
    let titleInput = document.createElement("input");

    let authorDiv = document.createElement("div");
    let authorLabel = document.createElement("label");
    let authorInput = document.createElement("input");

    let readDiv = document.createElement("div");
    let readLabel = document.createElement("label");
    let readInput = document.createElement("input");

    let ratingDiv = document.createElement("div");
    let ratingLabel = document.createElement("label");
    let ratingInput = document.createElement("input");

    let submitButton = document.createElement("button");

    // change elements properties
    titleLabel.textContent = "Title: "; 
    titleInput.id = "titleInput";
    titleInput.type = "text";

    authorLabel.textContent = "Author: ";
    authorInput.id = "authorInput";
    authorInput.type = "text";

    readLabel.textContent = "Read: ";
    readInput.id = "readInput";
    readInput.type = "checkbox";
    readInput.value = "read";

    ratingLabel.textContent = "Rating (1-5): ";
    ratingInput.id = "ratingInput";
    ratingInput.type = "number";
    ratingInput.min = 1;
    ratingInput.max = 5;

    submitButton.textContent = "Submit";
    submitButton.id = "sumbit";

    // connect nodes

    titleDiv.appendChild(titleLabel);
    titleDiv.appendChild(titleInput);

    authorDiv.appendChild(authorLabel);
    authorDiv.appendChild(authorInput);

    readDiv.appendChild(readLabel);
    readDiv.appendChild(readInput);

    ratingDiv.appendChild(ratingLabel);
    ratingDiv.appendChild(ratingInput);

    formDiv.appendChild(titleDiv);
    formDiv.appendChild(authorDiv);
    formDiv.appendChild(readDiv);
    formDiv.appendChild(ratingDiv);
    formDiv.appendChild(submitButton);
    formDiv.style.display = "block";


    submitButton.addEventListener('click', myLibrairy.submitForm);
  },
  submitForm: function() {
    let titleValue = document.querySelector("#titleInput").value;
    let authorValue = document.querySelector("#authorInput").value;
    let readValue = document.querySelector("#readInput").checked;
    let ratingValue = document.querySelector("#ratingInput").value;

    const newBook = {
      title: titleValue, 
      author: authorValue, 
      read: readValue, 
      rating: ratingValue
    };
    myLibrairy.books.push(newBook);
    myLibrairy.render();
  },
}

myLibrairy.init();
