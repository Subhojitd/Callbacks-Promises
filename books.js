// Array of book objects
let books = [
    {title:"To Kill a Mockingbird", author: "Harper Lee", year: 1960},
    {title:"1984", author: "George Orwell", year: 1949},
    {title:"Brave New World", author: "Aldous Huxley", year: 1932},
    {title:"Animal Farm", author: "George Orwell", year: 1945}

];
// A callback function to print the titles of the book
function logBookTitles(bookTitles){
    // sort the titles in alphabetical order
    bookTitles.sort();
    // log the titles
    console.log("Book titles in alphabetical order: ")
    bookTitles.forEach(function(title){
        console.log(title);
    })
}

// Useing the mapp function to create a new list of books
let bookTitles = books.map(function(book){
    return book.title;
})

logBookTitles(bookTitles)



