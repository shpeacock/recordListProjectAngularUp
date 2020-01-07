import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import Record from './models/record';

const app = express();
const router = express.Router();



app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/records', { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDb DatabaseConnection Established');
});

router.route('/records').get((req, res) => {
    Record.find((err, records) => {
        if (err)
            console.log(er);
        else
            res.json(records);
    });
});

router.route('/records/:id').get((req, res) => {
    Record.findById(req.params.id, (err, record) => {
        if (err)
            console.log(err);
        else
            res.json(record);
    });
});

router.route('/records/add').post((req, res) => {
    let record = new Record(req.body);
    record.save()
        .then(record => {
            res.status(200).json({ 'record': 'added successfuly' });
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/records/update/:id').post((req, res) => {
    Record.findById(req.params.id, (err, record) => {
        if (!record)
            return next(new Error('Could not load document'));
        else {
            record.artist = req.body.artist;
            record.title = req.body.title;
            record.genre = req.body.genre;
            record.rating = req.body.rating;

            record.save().then(record => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/record/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({ _id: req.params.id }, (err, record) => {
        if (err)
            res.json(err);
        else
            res.json('Remove successfully');
    });
});

app.use('/', router);
app.listen(4000, () => console.log('express server running on port 4000'));