/**
 * 1. Create express server
 * 2. Connect to mongoDb
 * 3. Initialise express server
 * 4. Initialise express middleware
 * 5. Create a simple get request route
 * 6. Inject our routes
 * 7. Listen to app connection
 */

 const express = require('express');
 const connectDb = require('./db');
 require('dotenv').config() //allows us to use the environment variables in .env file
 const { PORT } = process.env
 
 //File system
 const fs = require('fs')
 
 //Mock data for requests
 const portfolio = require('./db/data/portfolio.json')
 
 //Connect to db
 connectDb()
 
 //Initialise express
 const app = express();
 
 //Initialise express middleware
 app.use(express.json({ extended: false }));
 app.use(express.urlencoded({ extended: false }));

 //TEST ENDPOINT
app.get('/', (req, res) => res.json({ message: "Welcome to my Portfolio app!" }))

//GET PORTFOLIO
app.get('/portfolio', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Successful",
        data: portfolio
    })
})

//GET BIO DATA
app.get('/portfolio/bio', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Successful",
        data: {"bio": portfolio.bio }
    })
})

//GET ABOUT DATA
app.get('/portfolio/about', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Successful",
        data: {"about": portfolio.about }
    })
})

//GET ABOUT DATA
app.get('/portfolio/contact', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Successful",
        data: {"contact": portfolio.contact }
    })
})

//PORT 
const port = process.env.PORT || PORT;

//Listen to connection
app.listen(port, () => console.log(`app running on port ${port}`));