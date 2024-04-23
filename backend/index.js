import express from 'express'
import 'dotenv/config'

import connectDB from './database/db.js'
connectDB()

const app = express()


app.get('/test',(req,res)=>{
    res.json({message : "test run"})
})

app.listen(3000,()=>{
    console.log('server started at port : 3000')
})