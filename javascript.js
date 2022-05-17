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

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

addBookToLibrary("A test of tests", "Epstein", 69)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("A unique book", "JandoTopia.com", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)
addBookToLibrary("The book of books", "Jeff Valorant", 420)


const shelve = document.getElementsByClassName("shelve");

document.querySelector("img").addEventListener('click', ()=> {

});
for(let i = 0; i < myLibrary.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<h3>${myLibrary[i].title}<h3> 
    <h3>by ${myLibrary[i].author}<h3>
    <p>${myLibrary[i].pages} pages<p>`;
    shelve[0].appendChild(newDiv);
}

document.getElementById('add').addEventListener('click', ()=> {
    document.getElementById('form-popup').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
    });
document.getElementById('overlay').addEventListener('click', ()=> {
    document.getElementById('form-popup').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
    });