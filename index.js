let mongoose = require('mongoose');
const app = require('./app');
let hostname = '127.0.0.1';
let port = 3000
mongoose.connect("mongodb+srv://venkatasubbamma:sudha1454@cluster0.dro8kmw.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})
app.listen(port,hostname,()=>{
    console.log(`express server started at http://localhost:${port}`)
})