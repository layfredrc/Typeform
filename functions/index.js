const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");
const path = require("path");
const ejs = require("ejs");

// const firebaseApp = firebase.initializeApp(functions.config().firebase);

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
exports.app = functions.https.onRequest(app);
