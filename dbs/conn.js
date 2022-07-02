const mongoose = require('mongoose');

const local = "mongodb://localhost:27017/freelance";
const hosted = "mongodb+srv://freelance_services:freelance_services@cluster0.gyndj.mongodb.net/freelance-db?retryWrites=true&w=majority";

try {
    mongoose.connect(local, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
        console.log("Database connected"));
}
catch (error) {
    console.log("Database couldn't connect");
}