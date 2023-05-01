const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const app = express();

const auction = require('./routs/auction.js');
const register = require('./routs/auth/registration');
const login = require('./routs/auth/login');
const logout = require('./routs/auth/logout');

const posting = require('./routs/posting');
const result = require('./routs/result');
const show =require("./routs/show")
const bidOnAuction = require('./routs/bidOnAuction/bidOnDesiredAuction');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,"")));
app.use("/login",login);
app.use('/logout',logout);
app.use('/result',result);
app.use("/posting",posting);
app.use('/show',show);
app.use('/registration',register);

app.use("/auction", auction);


app.use('/auctions',bidOnAuction);
app.listen(4000,"localhost",()=>{

    console.log("server is running");
  });
