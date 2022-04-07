import { PrismaClient } from "@prisma/client";
import cors from "cors";

const jsonwebtoken = require("jsonwebtoken");
const express = require("express"),
  app = express();

const prisma = new PrismaClient();
const PORT = 3001;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
  next();
});

const jwtSecret = "ahsgkjdhlçiuytyghbkjnlmçkio1234564lkçjhgjdsab12342897912";



//CREATE USER
app.post("/user/create", async (req: any, res: any) => {
  //CHECK IF VALUES ARE NOT EMPTY
  if (
    req.body.password === "" ||
    req.body.name === "" ||
    req.body.email === ""
  ) {
    res.send({ code: 400, status: "Bad request" });
    return;
  }

  //CHECK IF EMAIL IS UNIQUE
  const users = await prisma.user.findMany({
    where: {
      email: req.body.email,
    },
  });

  if (users.length !== 0) {
    res.send({ code: 400, status: "Bad Request" });
    return;
  }

  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });

  res.send({ code: 200, status: "Ok" });
});

//USER LOGIN
app.post("/users/login", async (req: any, res: any) => {
  const users = await prisma.user.findMany({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  if (users.length !== 0) {
    const token = jsonwebtoken.sign({ user: req.body.email }, jwtSecret);
    res.cookie("isLogged", true);
    res.cookie("token", token);
    res.send({ code: 200, status: "Ok" });
    return;
  }
  res.send({ code: 400, status: "Bad Request" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
