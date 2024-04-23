import express from 'express'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import errorHandler from './middleware/errorhandler.js'
import connectDB from './database/db.js'
import adminRoutes from '../backend/routes/admin.route.js'

connectDB()


const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())
// Parse URL-encoded bodies with extended options
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

app.get('/test',(req,res)=>{
    res.json({message : "test run"})
})
app.use('/api/admin',adminRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`server started at port : ${port}`)
})

//error middleware
app.use(errorHandler)