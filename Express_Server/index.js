const express = require('express');
const cors = require('cors');
const app = express(); //app configuration
const {connectDb} = require('./db'); //importing the connectDb function from db.js

app.use(cors());
app.use(express.json()); //middleware to parse JSON bodies
// Connect to MongoDB
connectDb();

//CREATING AN API USING --> GET, POST, PUT, DELETE 
// https://localhost:8000/stocks --> this is our get api to fetch the stocks
app.get("/stocks", (req, res) => {
    console.log("stocks api is called");
    res.send("Stocks data");
});
// app.post();
// app.put();
// app.delete();

//This piece of code should be at last of the file
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});