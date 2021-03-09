// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++){
    if (authors[i].id === id){return authors[i]}
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++){
    if (books[i].id === id){return books[i]}
  }
}

function partitionBooksByBorrowedStatus(books) {
  let loaned = []
  let returned = []
 let result = books.find((book) => 
  {
    book.borrows.every((obj) => {
      if (obj.returned)
      {returned.push(book)} else {loaned.push(book)}
      })})
const allBooks = [loaned, returned]
  return allBooks
}

function getBorrowersForBook(book, accounts) {
  
  let array = []
  let match = accounts.forEach((account) => 
  {
   book.borrows.forEach((borrowed) => 
   {
      if(borrowed.id === account.id)
      {account.returned = borrowed.returned 
      array.push(account)}}
      
  )})
    
      return array.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
