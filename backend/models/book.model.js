import mongoose from "mongoose";
const { Schema } = mongoose;


const bookSchema = new Schema({
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
},{timestamps : true})

const Book = mongoose.model('Book',bookSchema);
export default Book;