const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({origin: true}));

app.use(express.json());

app.use("/api/contacts", require("./api/contacts"));

exports.app = functions.https.onRequest(app);
