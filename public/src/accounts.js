const findAccountById = (accounts, id) =>
  accounts.find(account => account.id === id);

const sortAccountsByLastName = accounts => 
accounts.sort((accountA,accountB) =>
  accountA.name.last < accountB.name.last ? -1 : 1);

let getTotalNumberOfBorrows = (account, books) =>
books.reduce((total, book) => total + book.borrows
.filter(entry => entry.id === account.id)
.reduce((acc, entry) => acc + 1, 0),
0
)

let getBooksPossessedByAccount = (account, books, authors) => {
  const result = books.filter(book =>
    book.borrows.some(entry => entry.id === account.id && !entry.returned)
  )
  result.forEach(
    book => (book.author = authors.find(author => author.id === book.authorId))
  )
  return result
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
