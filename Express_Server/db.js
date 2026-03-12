const mongoose = require('mongoose');

// Connect to MongoDB
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/stockdb');
    console.log('Connected to MongoDB');
    } 
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {connectDb};