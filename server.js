'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.API_PORT || 3001
const parser = require('body-parser');
const mongoose = require('./db/connection.js');

// pulling schemas from models
const Picture = require('./db/models.js').Picture;
const Caption = require('./db/models.js').Caption;

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

// app.use(function(req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//   next();
// });

app.use(cors())

// app.get("/", function(req, res) {
//   res.render("main")
// })
//
app.get("/api/pictures", function(req, res){
  Picture.find({}).then(function(pictures){
    res.json(pictures)
  })
})
//
// app.get("/api/pictures/:id", function(req,res) {
//   Picture.findOne({_id: req.params.id}).then(function(picture){
//     res.json(picture)
//   })
// })
//
// app.post("/api/pictures", function(req, res){
//   Picture.create(req.body).then(function(picture){
//     res.json(picture);
//   });
// });
//
// app.delete("/api/pictures/:id", function(req, res){
//   Picture.findOneAndRemove({_id: req.params.id}).then(function(){
//     res.json({success: true});
//   });
// });
//
// app.put("/api/pictures/:id", function(req, res){
//   Picture.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(picture){
//     res.json(picture);
//   });
// });
//
// app.get("/api/pictures/:pic_id/captions", function(req,res){
//   Picture.findOne({_id: req.params.pic_id}).then(function(){
//     res.json(picture);
//   })
// })
//
//
// app.post("/api/pictures/:pic_id/captions", function(req,res) {
//   Picture.findOne({_id: req.params.pic_id}).then(function(){
//     Caption.create({author: req.body.author, content: req.body.content}).then((caption) => {
//       res.json(caption)
//     })
//   })
// })

app.listen(port, function(){
  console.log("Port works yaaaaay");
})
