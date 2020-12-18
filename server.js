const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyparser=require('body-parser')
const connectdb =require('./helper/db')

// Config dotenv file
require('dotenv').config({
    path: './config/config.env'
})


const app = express();

//database
connectdb();

app.use(bodyparser.json())

// Load routes
const authLogin = require('./routes/auth/authLogin')
const authadmin=require('./routes/auth/authadmin')
const authservice=require('./routes/auth/authservice')


if (process.env.NODE_ENV === 'development') {

    // client frontend
    app.use(cors({
        origin: process.env.CLIENT_URL
     }))

    //middleware
    app.use(morgan('dev'))
}

// Use Routes
app.use('/api/', authLogin)
app.use('/api/',authadmin)
app.use('/api/',authservice)



app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Page not founded"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});