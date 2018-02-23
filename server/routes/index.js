var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const articles = [{
    title: "Article1",
    author: "Mike Lande",
    img:
      "http://animals.sandiegozoo.org/sites/default/files/inline-images/tapir_lowland_1.jpg",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has "
  },
  {
    title: "Article2",
    author: "Eduardo Posva",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has "
  },
  {
    title: "Article3",
    author: "Arthur Dudydude",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has "
  }]
  res.json(articles)
});

module.exports = router;
