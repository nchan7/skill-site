const express = require("express"); 
const app = express(); 
const layouts = require('express-ejs-layouts'); 

app.set("view engine", "ejs"); 
app.use(layouts);

var contact = {
	name: "Nathan Chan",
	email: "nathan@nathan.me",
	phone: "777-123-4567",
	fax: "Who uses faxes anymore?",
	site: "http://nathan.io"
};

var skills = [
	"JavaScript",
	"HTML 5",
	"CSS 3",
	"Node JS",
	"Express JS",
	"Python"
];

// Need a home page saying what this is 
// Need a skills page - route (server.js) and EJS (views)
// Need a contact page - route (server.js) and EJS (views)


app.get("/", function (req, res) {
    res.render("index", {contact});
});

app.get("/skills", function (req, res) {
    res.render("skills", {skills});
});

app.get("/contact", function (req, res) {
    res.render("contact", {contact});
});

app.listen(3000, function () {
    console.log("Listening on port 3000..."); 
});