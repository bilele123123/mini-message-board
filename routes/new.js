const express = require('express');
const router = express.Router();
const messages = require('../messages');

router.get('/', function(req, res, next) {
    res.render('form', { title: 'New Message Form' });
});

router.post('/', function(req, res, next) {
    const { author, messageText } = req.body;
    messages.push({ text: messageText, user: author, added: new Date() });
    res.redirect('/');
})

module.exports = router;