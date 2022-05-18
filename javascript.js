function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function() { 
        let sentence =  title + " by " + author + ", " + pages + ", ";
        if(!this.read) sentence += "not read yet";
        else sentence += "read ";
        return sentence;
    }
}

let myLibrary = [];

const shelve = document.getElementById("shelve");

function refreshShelf() {
    while(shelve.firstChild) {
        shelve.removeChild(shelve.firstChild);
    }       
    for(let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<h3>${myLibrary[i].title}<h3> 
        <h3>by ${myLibrary[i].author}<h3>
        <p>${myLibrary[i].pages} pages<p>`;
        shelve.appendChild(newDiv);
    }
}

function addBook(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

addBook("A test of tests", "Epstein", 69)
addBook("The book of books", "Jeff Valorant", 420)
addBook("The book of books", "Jeff Valorant", 420)
addBook("The book of books", "Jeff Valorant", 420)
addBook("The book of books", "Jeff Valorant", 420)
addBook("The book of books", "Jeff Valorant", 420)
addBook("A unique book", "JandoTopia.com", 420)
addBook("The book of books", "Jeff Valorant", 420)
addBook("The book of books", "Jeff Valorant", 420)

refreshShelf();

document.getElementById('submit').addEventListener('click', ()=> {
    if(document.getElementById('form-container').checkValidity()) {
        addBook(document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value);

        refreshShelf();
    }
});
document.getElementById('add').addEventListener('click', ()=> {
    document.getElementById('form-popup').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
    });
document.getElementById('overlay').addEventListener('click', ()=> {
    document.getElementById('form-popup').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    });