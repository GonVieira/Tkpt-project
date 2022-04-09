
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { Request, Response } from "express";

const jsonwebtoken = require("jsonwebtoken");
const express = require("express"),
  app = express();
const prisma = new PrismaClient();
const PORT = 3001;

let token = "";

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  next();
});

//CREATE USER
app.post("/user/create", async (req: Request, res: Response) => {
  //CHECK IF VALUES ARE NOT EMPTY

  if (
    req.body.password === "" ||
    req.body.name === "" ||
    req.body.email === ""
  ) {
    res.sendStatus(400);
    return;
  }

  //CHECK IF EMAIL IS UNIQUE
  const users = await prisma.user.findMany({
    where: {
      email: req.body.email,
    },
  });

  if (users.length !== 0) {
    res.sendStatus(400);
    return;
  }

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });
  res.sendStatus(200);
});

//USER LOGIN
app.post("/users/login", async (req: Request, res: Response) => {
  const user = await prisma.user.findMany({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (user.length !== 0) {
    const payload = {
      id: user[0].id,
      name: user[0].name,
      email: user[0].email,
      password: user[0].password,
    };

    token = generateAccessToken(payload);
    res.cookie("accessToken", token);
    
    res.cookie("isLogged", true);
    return res.sendStatus(200);
  }
  return res.sendStatus(400);
});

//AUTHENTICATE TOKEN
app.get(
  "/authenticate",
  authenticateToken,
  (req: Request, res: Response, next: any) => {
    console.log("Authentication");
    res.sendStatus(200);
  }
);

function generateAccessToken(payload: any) {
  return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1800s",
  });
}

function authenticateToken(req: Request, res: Response, next: any) {
  
  if (token == null) return res.sendStatus(401);

  jsonwebtoken.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
