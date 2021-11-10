const findAuthorById = ((authors, id) =>
authors.find(author => author.id === id));

const findBookById = (books, id) =>
books.find(book => book.id === id);


let partitionBooksByBorrowedStatus= (books => { 
  let checkedOut = []
  let returned = []
  let result = []
books.forEach(book => (!book.borrows[0].returned) ? checkedOut.push(book) : returned.push(book))
result.push(checkedOut);
result.push(returned);
 return result
})


const getBorrowersForBook = ((book, accounts) => {
  const { borrows } = book
  let result = borrows.map(({ id, returned }) => {
    let account = accounts.find(account => account.id === id)
    return { ...account, returned }
  })
  return result.slice(0, 10);
})


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
