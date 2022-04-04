import express from "express";

require('@prisma/client');
const app = express();
require('dotenv').config();
const route = require('./routes');
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// redirect to routes/index.js
app.use('/', route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



{/** 
import { PrismaClient } from "@prisma/client";
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const prisma = new PrismaClient();


app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello from server!" });
});

//LAST THING IN THE FILE
app.listen(PORT, async () => {
  console.log(`Server listening on ${PORT}`);
 await prisma.user.create({
    data:{
    name:"joao",
    email:"joaozinho@gmail.com",
    pass:"12345"
    },
  })
});
*/}