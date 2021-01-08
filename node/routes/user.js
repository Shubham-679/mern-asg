const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const User = require('../models/userModel');

// get all user

router.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user)
});

// save user

router.post('/', async (req, res) => {

    const user = new User({
        name: req.body.name,
        username: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    })

    const savedUser = await user.save();
    res.send(savedUser);
})

// update user

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!user) return res.status(404).send("The user with the given ID was not found.");
    res.send(user);
})

module.exports = router;