// Helper function for .splice
function sortnSplice(arr) {
  arr.sort((a,b) => b.count - a.count)
  return arr.splice(0,5)
}


let getTotalBooksCount = (books) => books.length;

let getTotalAccountsCount = accounts=> accounts.length ;

let getBooksBorrowedCount = books =>
  (countBorrowed = books.filter((book) => !book.borrows[0].returned).length);












const getMostCommonGenres = (books, count = {}) => {
  let result = [];
  books.forEach(book =>
     !count[book.genre] ? (count[book.genre] = 1) : count[book.genre]++
    );
    for (let [key, value] of Object.entries(count)) {
      result.push({
        name: key,
        count: value
      });
    }
  return sortnSplice(result);
};



















const getMostPopularBooks = books => {
  let result = books
    .sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length) 
    .map(book => ({ name: book.title, count: book.borrows.length}));
  return result.slice(0, 5);
}

let getMostPopularAuthors = (books, authors) => {
  let result = [];
  authors.forEach((author) => {
    let authorName = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
};
books.forEach((book) => {
  if ( book.authorId === author.id){
    authorName.count += book.borrows.length
}
})
    result.push(authorName);
})
  return sortnSplice(result);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
