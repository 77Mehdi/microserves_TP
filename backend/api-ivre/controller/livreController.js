import Book from "../model/livre.js";


//http://localhost:3000/books
export const AllBook = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
//http://localhost:3000/books/id
export const OneBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


///http://localhost:3000/books
// {
//     "title": "best BOOK tt01",
//     "author": "mehdi43",
//     "isbn": "fhth",
//     "stock": 51t12
//   }
export const creatBook = async (req, res) => {

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        stock: req.body.stock,
    });

    if(!book){
        res.status(300).json({'msg':'canot creat it'});
    }

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


/// http://localhost:3000/books/66577aa4be2335efaf0a4e93
// {
  
//     "title": "best BOOK 01",
//     "author": "mehdi43",
//     "isbn": "888ty",
//     "stock": 5112
//   }
export const updateBook =async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (book == null) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      if (req.body.title != null) {
        book.title = req.body.title;
      }
      if (req.body.author != null) {
        book.author = req.body.author;
      }
      if (req.body.isbn != null) {
        book.isbn = req.body.isbn;
      }
      if (req.body.stock != null) {
        book.stock = req.body.stock;
      }
  
      const updatedBook = await book.save();
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }




  export const deletBook=async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
    
      if (book == null) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
    
      res.json({ message: 'Book deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }