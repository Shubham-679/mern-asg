const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Album = require('../models/albumModel');
const User = require('../models/userModel');
//  get all the albums

router.get('/' , async (req, res) => {
    const album = await Album.find();
    res.send(album)
})

// get albums of a particular user

router.get('/:id' , async (req, res) => {
    const user = await Album.find({user : req.params.id})
    .populate('user', 'name -_id')
    .select('title')
    res.send(user);
})

// save albums

router.post('/', async (req, res) => {

    const album = new Album({
        title : req.body.title
    })
    const savedAlbum = await album.save();
    res.send(savedAlbum);
})

// save album of particular user

router.post('/:id', async (req, res) => {
    const user =  await User.findById(req.params.id)
    if (!user) return res.status(404).send("Invalid User!");

    const album = new Album({
        title : req.body.title,
        user : user._id
    })
    const savedAlbum = await album.save();
    res.send(savedAlbum);
  })

// update albums 

router.put('/:id', async (req, res) => {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {new : true});
    if (!album) return res.status(404).send("The album with the given ID is not found.");
    res.send(album);
})

module.exports = router;