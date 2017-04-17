'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001
const parser = require('body-parser');
const mongoose = require('./db/connection.js');

const Picture = require('./db/models.js').Picture;
const Caption = require('./db/models.js').Caption;

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}));

app.use(cors())

app.get("/api/pictures", function(req, res){
  Picture.find({}).then(function(pictures){
    res.json(pictures)
  })
})

app.post("/api/pictures", function(req, res){
  Picture.create({
    photo_url: req.body.url,
    alt: req.body.alt
  }).then(function(picture){
    res.json(picture)
  })
})

app.delete("/api/pictures/:id", function(req, res){
  Picture.findOneAndRemove({_id: req.params.id}).then(function(){
    res.json({success: true})
  })
})

app.post("/api/pictures/:id/captions", function(req, res){
  Picture.findOne({_id: req.params.id}).then(function(picture){
    var newCaption = new Caption(req.body)
    picture.captions.push(newCaption)
    picture.save(function(err, picture){
      if (err) throw err;
      res.json(picture)
    })
  })
})

app.get("/api/pictures/:id/captions", function(req, res){
  Picture.findOne({_id: req.params.id}).then(function(picture){
    res.json(picture.captions)
  })
})


// app.put("/api/pictures/:id", function(req, res){
//   Picture.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(picture){
//     res.json(picture);
//   });
// });

app.listen(port, function(){
  console.log("Port works yaaaaay");
})
