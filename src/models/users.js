const mongoose = require('mongoose');
// User Schema to send the data
const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true },
    lastName: { 
        type: String, 
        required: true },
    email: { 
        type: String, 
        required: true, 
     },
    gender: { 
        type: String, 
        enum: ['male', 'female', 'other'], 
        required: true },
    country: {  
        type: String, 
        required: true },
    state: { 
        type: String,
        required: true },
    city: { type: String, required: true },
    dob: { 
        type: Date, 
        required: true },
    age: { 
        type: Number,
        required: true }
});

const User = new mongoose.model('user',userSchema);
module.exports = User;