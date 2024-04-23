import express from "express";

const router = express.Router();

import { addBook,editBook,deleteBook } from "../controllers/admin.controller.js";

//route to fetch all books
router.get('/getAllBooks')

//Route to add new Book
router.post('/addBook',addBook);

//Route to delete book
router.delete('/deleteBook/:id',deleteBook)

//Route to edit specific book
router.put('editBook/:id',editBook)

export default router