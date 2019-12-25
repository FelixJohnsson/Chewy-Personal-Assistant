const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eternal:qa2foooc@chewy-dygih.azure.mongodb.net/test')


app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", '/index.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))