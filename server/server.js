const express = require('express')
const cors = require('cors')
const mongoose  = require('mongoose')
const userRoutes = require('./routes/userRoutes')


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/blind_student_db',{family: 4})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`)
})