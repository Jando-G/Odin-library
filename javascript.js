function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() { 
        let sentence =  title + " by " + author + ", " + pages + ", ";
        if(!this.read) sentence += "not read yet";
        else sentence += "read ";
        return sentence;
    }
}

