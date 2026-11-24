module.exports = Book

Book.create({
    title: 'The City of Brass',
    author: 'S. A. Chakraborty',
    isbn: '1234',
    publicationDate: Date,
    inStock: true
})
.then(createdBook => {
  console.log('Book created successfully:', createdBook);
})
.catch(err => {
  console.error('Error creating new book:', err);
});
