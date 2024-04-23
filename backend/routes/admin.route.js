import express from "express";

const router = express.Router();

import { addBook } from "../controllers/admin.controller.js";


//Route to add new Book
router.post('/addBook',addBook);

//Route to delete book
router.delete('/deleteBook/:id')

//Route to edit specific book
router.put('editBook/:id')

export default router