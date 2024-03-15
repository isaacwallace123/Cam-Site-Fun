require('dotenv').config();

//WebsiteStuff
const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Middleware Routes

app.get('/', (req,res) => {
    res.render('index');
});

app.get('*', function(req, res) {
    res.render('errorpage');
});

//Listeners for website
app.listen(process.env.PORT || 5000);