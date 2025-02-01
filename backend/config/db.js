const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://jithuze:jithu123@project.ogi8v.mongodb.net/?retryWrites=true&w=majority&appName=Project'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("Connected to MongoDB Successfully!");
})
.catch((err)=>{
    console.error('Error connecting to MongoDB : ',err);
})

module.exports = mongoose.connection;