require('dotenv').config()
// console.log(process.env.PORT)
const express=require("express");

const app=express();

// const port=4000;  When using local host i.e hardcoded port.

app.get("/",(req,res)=>
{
    res.send("HOME");
});

app.get("/about",(req,res)=>
{
    res.send("About");
});

app.get("/contact",(req,res)=>
{
    res.send('<h1>This is a HTML H1</h1><br><h2>Padh le</h2>');
})

app.listen(process.env.PORT,(req,res)=>
{
    console.log(`started ${process.env.PORT}`);
})