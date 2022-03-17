const router = require('express').Router();
const path = require('path');
const isLoggedIn = require('../utils/isLoggedIn');
const { uploadLocal } = require('../utils/multer');
const userModel = require('../models/User');


router.get('/', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/profile.html'));
});

router.post('/upload', isLoggedIn, uploadLocal.single('picture'), async (req, res) => {
    const user = req.user;
    const filename = req.file.filename;
    try {
        await userModel.setPicture(user.id, filename);
        res.redirect('/profile');
    } catch (e) {
        console.error(e);
        res.status(500).send({});
    }
});

module.exports = router;