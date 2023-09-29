const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./db/userModel');
const auth = require('./auth');

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const dbConnect = require('./db/dbConnect');
dbConnect();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register end point API
app.post("/register", (request, response) => {
  bcrypt.hash(request.body.password, 10)
  .then((hashedPassword) => {
    const user = new User({
      email: request.body.email,
      password: hashedPassword
    });
    user.save()
    .then((result) => {
      response.status(201).send({
        message: 'Successfully created',
        result 
      });
    })
    .catch((err) => {
      response.send(500).send({
        message: "Error creating user",
        err 
      });
    })
  })
  .catch((err) => {
    response.status(500).send({
      message: "Password was not hashed successfully",
      err
    })
  })
})

// login end point API
app.post('/login', (request, response) => {
  User.findOne({email: request.body.email})
  .then((user) => {
    bcrypt.compare(request.body.password, user.password)
    .then((passwordStatus) => {
      if(!passwordStatus) {
        return response.status(400).send({
          message: "Password does not match",
          err 
        });
      }

      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email 
        }, 
        "RANDOM-TOKEN",
        {expiresIn: "24h"}
      );
      response.status(200).send({
        message: "Login successful",
        email: user.email,
        jwt_token: token 
      });
    })
    .catch((err) => {
      response.status(400).send({
        message: "Password does not match",
        err
      })
    })
  })
  .catch((err) => {
    response.status(404).send({
      message: "Email not found in DB",
      err
    })
  })
})

// free endpoint
app.get("/free-endpoint", auth, (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});

// authentication endpoint
app.get("/auth-endpoint", auth, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
module.exports = app;
