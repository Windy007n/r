const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs')

app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'ejs')

app.use("/static", express.static("static"))

app.get("/", (req, res) => {

    res.render('home', req.query)

})

app.listen(80, () => console.log("server listen on port 80"))