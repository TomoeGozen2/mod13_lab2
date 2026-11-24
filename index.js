import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import {connectDB} from './db/connection'
require('dotenv').config();
const URI = process.env.MONGO_URI

const app = express()
const port = 3000

 
// Connect to MongoDB and handle the promise
mongoose.connect(URI)
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch(err => console.error('Connection error', err));

app.use(express.json())

app.get('/',(req,res) => {
    app.send('It works')
})

app.listen()