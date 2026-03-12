const mongoose = require('mongoose');
const {Schema} = mongoose;

const stockSchema = new Schema({
    name: String,
    symbol: String,
    cost: String,
});