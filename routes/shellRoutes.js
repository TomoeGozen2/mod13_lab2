import 'dotenv/config'
import express from 'express'
const rout = e.Router();
route.get('/api/books', async(req, res) => {
    try{
        const response = await Book.find({
            
            
        })
        try{
            res.status(200).json(response)
        }
        catch(err){
            res.status(400).json({error})
        }
    }
})

route.post('/books/post', async (req, res) =>{
    try {
        const newBook = await Book.create(req.body)
        console.log('Succeffuly created book')
        res.status(200).json(newBook)
    }catch(err){
        console.error('failed to create bot', err)
        res.status(400).json({error: 'could not create book', details:err.message})
    }
})