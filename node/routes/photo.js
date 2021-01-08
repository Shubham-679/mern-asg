const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Photo = require('../models/photoModel');
const Album = require('../models/albumModel');

// get all photos 

router.get('/', async (req, res) => {
    const photo = await Photo.find();
    res.send(photo);
})

// get photos of particular album

router.get('/:id' , async (req, res) => {
    const album = await Photo.find({album : req.params.id})
    .populate('album', 'title -_id')
    .select('url')
    res.send(album);
})

// save photos

router.post('/', async (req, res) => {
    // const album = await Album.findById(req.body.albumId)
    // if (!album) return res.status(404).send("Invalid Album!");

    const photo = new Photo({
        url: req.body.url,
        // album: album._id
    })
    const savedPhoto = await photo.save();
    res.send(savedPhoto);
})

// update image url 

router.put('/:id', async (req, res) => {
    const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!photo) return res.status(404).send("The photo with the given ID is not found.");
    res.send(photo);
})

module.exports = router;