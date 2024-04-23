
import Book from "../models/book.model.js";

//Controller to add New book
export const addBook = async(req,res,next) => {
    try {
        
        const {bookName , description, publishedDate, price } = req.body ;

          // Check if every details are provided
    if(!bookName || !description || !publishedDate || !price) {
        const BookError = new Error('Category name and description are required');
        BookError.statusCode = 400;
       return next(BookError)
      }
     //check if book already exists in database
      const existingBook = await Book.findOne({bookName});
      if(existingBook){
        const BookAddError = new Error('Book Already exists');
        BookAddError.statusCode = 409;
        return next(BookAddError)
      }

      //creating a new book
      const newBook = new Book({
        bookName,
        description,
        publishedDate,
        price,
      });

      //saving the new Book
      const savedBook = await newBook.save();

      return res.status(201).json({success : true , message : 'new book added',book : savedBook})
    } catch (error) {
       next(error)
    }
}


//controller to edit book
export const editBook = async(req,res,next) => {
    const {bookName , description, publishedDate, price } = req.body ;
    const bookId = req.params.id
    try {
         //handle error where the bookid is not provided
    if(!bookId){
        const BookIdError = new Error('Category Id not provided');
        BookIdError.statusCode = 400;
       return next(BookIdError)
      }

      const existingBook = await Book.findOne({_id : bookId});
      //handle error when book is not found
      if(!existingBook){
        const BookNotFoundError = new Error('Category Not Found!!');
        BookNotFoundError.statusCode = 404 ; 
      return  next(BookNotFoundError)
    }

     if(bookName){
        existingBook.bookName = bookName ; 
     }
     if(description){
        existingBook.description = description;
     }
     if(publishedDate){
        existingBook.publishedDate = publishedDate ; 
     }
     if(price){
        existingBook.price = price;
     }

     //updating the book
     const updatedBook = await existingBook.save();
     return res.status(200).json({success : true , message : 'new book added',book : updatedBook})
    } catch (error) {
        next(error)
    }
}


//controller to delete book
export const deleteBook = async(req,res,next) => {
    const bookId = req.params.id

    try {
        //return error if no bookId provided
        if(!bookId){
            const BookIdError = new Error('Category Id not provided');
            BookIdError.statusCode = 400;
           return next(BookIdError)
          }

          const existingBook = await Book.findById(bookId);
          
          //handle error where the book is not found
          if(!existingBook){
            const BookError = new Error('No Book found');
            BookError.statusCode = 404;
            return next(BookError)
          }
          //delete Book from collection
          const deletedBook = await Book.findByIdAndDelete(bookId);
          res.status(200).json({ success: true, message: 'Book deleted successfully' })

    } catch (error) {
        next(error)
    }
}