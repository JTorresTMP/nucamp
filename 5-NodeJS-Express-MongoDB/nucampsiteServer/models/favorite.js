const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    campsites: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campsite'
        }
    ]
});

module.exports = mongoose.model('Favorite', favoriteSchema);
