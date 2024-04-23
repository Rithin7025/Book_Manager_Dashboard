import mongoose from "mongoose";
const { Shema } = mongoose;


const bookSchema = new Shema({
    bookName : {
        type  : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    publishedDate : {
        type : Date,
        required : true
    },
    price : {
        type : Number,
        required : true
    }
})

const Book = mongoose.model('Book',bookSchema);
export default Book;