
import express from 'express';
import * as LiverController from '../controller/livreController.js';

const bookRoutes = express.Router();



// Get all books  http://localhost:3000/books/
bookRoutes.get('/', LiverController.AllBook);
// Get a single book http://localhost:3000/books/id
bookRoutes.get('/:id', LiverController.OneBook);
// Create a new book  http://localhost:3000/books/
bookRoutes.post('/', LiverController.creatBook);
// Update a book  http://localhost:3000/books/id 
bookRoutes.put('/:id', LiverController.updateBook);
// Delete a book  http://localhost:3000/books/id
bookRoutes.delete('/:id', LiverController.deletBook);




export default bookRoutes;
