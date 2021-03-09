// Note: Please do not change the name of the functions. The tests use those names to validate your code.

/*It returns the account object that has the matching ID.

**Example:**

```javascript
findAccountById(accounts, "5f446f2ecfaf0310387c9603");
/*
  {
    "id": "5f446f2ecfaf0310387c9603",
    "name": {
      "first": "Esther",
      "last": "Tucker"
    },
    ...
  }*/

function findAccountById(accounts, id) {
let found = accounts.find((account) => account.id === id)
return found
}

function sortAccountsByLastName(accounts) {
  let sortedNames = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  let newArray = []
  for (let i = 0; i < sortedNames.length; i++){
  newArray.push({ name: sortedNames[i] ["name"] })}
  return newArray
}


function getTotalNumberOfBorrows(account, books) {
  let result = 0
  let adding = books.forEach((book) => 
  {
    book.borrows.forEach((obj) => {
      if (obj.id === account.id)
      {result = result + 1}
      })})

return result

}

function getBooksPossessedByAccount(account, books, authors) {
  let array = []
  let result = books.forEach((book) => 
   {
    book.borrows.filter((borrowed) => { 
     if (borrowed.id === account.id && borrowed.returned === false)
     {
      book.author = getAuthorById(authors, book.authorId)
      array.push(book) 
    }}
    
   )
   }
 )
     return array
 }
function getAuthorById(authors, authorId) 
{ return authors.find(author => author.id === authorId); }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
