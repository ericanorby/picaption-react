const Picture = require("./models.js").Picture
const Caption = require("./models.js").Caption

Picture.remove({}, err => {
  if (err) {
    console.log(err);
  }
})

Caption.remove({}, err => {
  if (err) {
    console.log(err);
  }
})

var leopard = new Picture({
  "photo_url": "http://i2.cdn.cnn.com/cnnnext/dam/assets/151001180930-04-week-in-photos-1002-super-169.jpg",
  "alt": "Leopard with bucket on head"
})
var pig = new Picture({
  "photo_url": "https://www.ima.umn.edu/~nigam/funny.jpg",
  "alt": "Two people pulling a pig on a leash"
})
var sponge = new Picture({
  "photo_url": "http://static.fjcdn.com/large/pictures/8c/87/8c87eb_2340376.jpg",
  "alt": "Spongebob looking guilty with hands behind back"
})

Picture.create({
  "photo_url": "http://i.telegraph.co.uk/multimedia/archive/03600/potd-squirrels_3600130k.jpg",
  "alt": "Squirrels"
})

Picture.create({
  "photo_url": "http://a.abcnews.com/images/International/RT-week-in-pictures-cricket-jef-170104_22x15_1600.jpg",
  "alt": "Baseball player"
})

Picture.create({
  "photo_url": "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/10/31/102141273-450751107.530x298.jpg?v=1440513637",
  "alt": "A robot using the phone"
})

Picture.create({
  "photo_url": "http://media.npr.org/assets/img/2016/12/08/coleman-and-son--bf0e6d7405337a25d19a9074f92df5c760499807-s900-c85.jpeg",
  "alt": "Adult and child playing with silly putty"
})

Picture.create({
  "photo_url": "https://s3-us-west-2.amazonaws.com/extra-crispy-media/assets/field%2Fimage%2Fcoffee-spill-hero.jpg",
  "alt": "A man spilling coffee"
})

var caption1 = new Caption({
  "author": "Eva",
  "content": "Help! I'm stuck and I can't get out!"
})
var caption2 = new Caption({
  "author": "Erica",
  "content": "Does this metal hat compliment my fur tone?"
})
var caption3 = new Caption({
  "author": "Eva",
  "content": "Pig: But I don't wanna go to school!"
})
var caption4 = new Caption({
  "author": "Erica",
  "content": "Guess what I have behind my back?"
})

leopard.captions.push(caption1, caption2)
leopard.save((err, picture) => {
  if (err) {
    console.log(err);
  } else {
    console.log(picture)
  }
})
pig.captions.push(caption3)
pig.save((err, picture) => {
  if (err) {
    console.log(err);
  } else {
    console.log(picture)
  }
})
sponge.captions.push(caption4)
sponge.save((err, picture) => {
  if (err) {
    console.log(err);
  } else {
    console.log(picture)
  }
})
