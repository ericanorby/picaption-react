'use strict'

const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3001
const parser = require('body-parser')
const mongoose = require('./db/connection.js')

const Picture = require('./db/models.js').Picture
const Caption = require('./db/models.js').Caption

app.use(parser.json({extended: true}))

app.use(cors())

app.get("/api/pictures", (req, res) => {
  Picture.find({}).then((pictures) => {
    res.json(pictures)
  })
})

app.post("/api/pictures", (req, res) => {
  Picture.create({
    photo_url: req.body.url,
    alt: req.body.alt
  }).then((picture) => {
    res.json(picture)
  })
})

app.delete("/api/pictures/:id", (req, res) => {
  Picture.findOneAndRemove({_id: req.params.id}).then(() => {
    res.json({success: true})
  })
})

app.post("/api/pictures/:id/captions", (req, res) => {
  Picture.findOne({_id: req.params.id}).then((picture) => {
    let newCaption = new Caption(req.body)
    picture.captions.push(newCaption)
    picture.save((err, picture) => {
      if (err) throw err
      res.json(picture)
    })
  })
})

app.get("/api/pictures/:id/captions", (req, res) => {
  Picture.findOne({_id: req.params.id}).then((picture) => {
    res.json(picture.captions)
  })
})

app.listen(port, () => {
  console.log("Port works yaaaaay")
})
