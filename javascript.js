function generateRandomColor() {
    var letters = '12345678'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

function Book(title, author, pages) {
    this.title = title;
    this.color = generateRandomColor();
    this.author = author;
    this.pages = pages;
    this.read = false;
}

let myLibrary = [];

for(let i = 0; i < localStorage.length; i++) {
    let str = localStorage.getItem(`book${i}`);
    console.log(JSON.parse(str));
    myLibrary[i] = JSON.parse(str);
}

const shelve = document.getElementById("shelve");

function refreshShelf() {
    while(shelve.firstChild) {
        shelve.removeChild(shelve.firstChild);
    }   
    if(myLibrary[0]) {    
    for(let i = 0; i < myLibrary.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `<div>
        <p class="pages ${myLibrary[i].read ? 'pages-active' : ''}">${myLibrary[i].pages}</p>
        <img class="delete" src="./Assets/delete-outline.png">
        </div>
        <h2>${myLibrary[i].title}</h2> 
        <h3>by ${myLibrary[i].author}</h3>`;
        newDiv.style.backgroundColor = myLibrary[i].color;
        shelve.appendChild(newDiv);
    }
    let pages = document.getElementsByClassName("pages");
for(let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', ()=> {
        myLibrary[i].read = !myLibrary[i].read;
        pages[i].classList.toggle("pages-active");
    })
}
    let deletes = document.getElementsByClassName("delete");
    for(let i = 0; i < deletes.length; i++) {
        deletes[i].addEventListener('click', ()=> {
            myLibrary.splice(i, 1);
            refreshShelf();
        })
    }
}
else {
    let msg = document.createElement("h2");
    msg.innerHTML = "(⌣_⌣”)<br>Your library is empty.<br>Click the \'+\' icon to add a new book.";
    msg.setAttribute('id', 'emptyMsg');
    shelve.appendChild(msg);
}
}
function addBook(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

refreshShelf();

document.getElementById('submit').addEventListener('click', ()=> {
    if(document.getElementById('form-container').checkValidity()) {
        addBook(document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value);

        refreshShelf();

        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
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
window.onbeforeunload = ()=> {
    localStorage.clear();
    for(let i = 0; i < myLibrary.length; i++) {
        let book = JSON.stringify(myLibrary[i]);
        localStorage.setItem(`book${i}`, book);
    }
}