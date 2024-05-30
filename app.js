const express = require("express");
const Quote = require("inspirational-quotes");

const app = express(); //สร้างคำคม

app.get("/",(req,res) => {
    res.send(Quote.getQuote());
})

//port
app.listen(5000, () => {
    console.log("Server Started Successfully!")
})
