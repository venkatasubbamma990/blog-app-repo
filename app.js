let express = require('express');
let Blog = require('./model')
let app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("welcome to db")
})
app.post('/blog',async (request,response)=>{
    
    try{
        let blogs = await Blog.create(request.body);
    blogs.save()
        response.json({
            status:'Success',
            blog:blogs
        })
        console.log(request.body)
    }
    catch(err){
        response.status(500).json({
            status:'failure',
            message:err.message
        })
    }
}) 
app.get('/blog',async (request,response)=>{
    
    try{
        let blogs = await Blog.find();
    
        response.json({
            status:'Success',
            blog:blogs
        })
        
    }
    catch(err){
        response.status(500).json({
            status:'failure',
            message:err.message
        })
    }
}) 
app.put('/blog/:id',async (request,response)=>{
    
    try{
        let blogs = await Blog.updateOne({_id:request.params.id},{$set:{description:request.body.description}});
   
        response.json({
            status:'Success',
            blog:blogs
        })
       
    }
    catch(err){
        response.status(500).json({
            status:'failure',
            message:err.message
        })
    }
}) 

app.delete('/blog/:id',async(request,response)=>{
    try{
        let blog = await Blog.deleteOne({_id:request.params.id},request.body)
        response.json({
            status:'succsess',
            blog:blog
        })
    }
    catch(e){
        response.status(500).json({
            status:'failure',
            message:e.message
        })
    }
})
/* {
    "topic":"blog about festival",
    "description":"celebrating sankranthi",
    "posted_at":"18/01/23",
    "posted_by":"nandhana"

} */
module.exports = app