// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const { findBookById } = require("./books")

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let loaned = []
  let returned = []
 let result = books.find((book) => 
  {
    book.borrows.every((obj) => {
      if (obj.returned === true)
      {returned.push(book)} else {loaned.push(book)}
      })})
      return loaned.length
}

function getMostCommonGenres(books) {
  let array = []
  let result = books.forEach((book) => 
   array.push(book.genre))

let reduced = array.reduce((acc, it) => { 

  acc[it] = acc[it] + 1 || 1;
  return acc;
}, []);
let newArray = []
for (genre in reduced){
  newArray.push({name: genre, count: reduced[genre]})
}


let sorted = newArray.sort((countA, countB) => countA.count > countB.count ? -1 : 1)

   return sorted.slice(0,5)
}

function getMostPopularBooks(books) {
  let array = []
  let result = books.forEach((book) => 
   array.push({name: book.title, count: book.borrows.length}))
 let newArray = array.sort((countA, countB) => 
 countA.count > countB.count ? -1 : 1)

    return newArray.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const authorObj = books.reduce((acc, book) => {
    const { authorId } = book;
    const author = authors.find(auth => auth.id === authorId);
    const name = `${author.name.first} ${author.name.last}`;

    if(!acc[name]) acc[name] = { count: 0 };

    acc[name].count += book.borrows.length;

    return acc;
  }, {});

  const authorArray = Object.keys(authorObj).map(key => ({
    name: key,
    count: authorObj[key].count
  })).sort((a, b) => a.count - b.count).reverse();
  return authorArray.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
