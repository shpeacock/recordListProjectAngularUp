import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Record = new Schema({
    artist: {
        type: String
    },
    title: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number,
        default: 0,
    }
});

export default mongoose.model('Record', Record);