import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { testDataRouter } from './routers/test-data-router';
import bodyParser from 'body-parser';
import path from 'path';
import { sequelize } from './sequelize';


const ALLOWED_URLS = ['http://62.217.182.231:8080'];

console.log({ALLOWED_URLS})
const ALLOWED_METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'files', 'images')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: ALLOWED_URLS,
    methods: ALLOWED_METHODS,
    credentials: true
}));

app.use('/api', testDataRouter);

const PORT = process.env.PORT || 5000;



const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('DB CONNECTED');
    } catch (err) {
        console.log('DB ERROR');
    }
    try {
        app.listen(PORT, () => console.log('start on Port: ', PORT, ' success'));
    } catch (err) {
        console.log('start ', {err});
    }
}

start();