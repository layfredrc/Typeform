const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const path = require("path");
const ejs = require("ejs");
// const auth = require(__dirname + "/auth.js");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("home", {});
});

app.get("/register", (req, res) => {
	res.render("register", {});
});

app.get("/login", (req, res) => {
	res.render("login", {});
});

app.get("/workspace", (req, res) => {
	res.render("workspace", {});
});
app.post("/login", (req, res) => {
	res.redirect("/workspace");
});

app.post("/register", (req, res) => {
	const fName = req.body.firstName;
	const lName = req.body.lastName;
	console.log(fName, lName);
});

exports.app = functions.https.onRequest(app);
