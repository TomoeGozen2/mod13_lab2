import {Schema} from 'mongoose'

const bookSchema = new Schema({
    title: {
        type: String, 
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    isbn:{
        type:String, 
        unique:true,

    },
    publishedDate: Date,
    inStock: {
        type:Boolean,
        default: true,

    }
})
export const Book = mongoose.model('Book', Schema)
