const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./routes/user');
const albums = require('./routes/album');
const photos = require('./routes/photo')
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/users', users);
app.use('/albums', albums);
app.use('/photos', photos);


mongoose.connect('mongodb://localhost/nodeDB', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Could not connected to mongoDB"));

app.listen(3000, () => {
    console.log("Server is up and running on PORT : 3000")
})