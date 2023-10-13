import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();


dotenv.config();

// To handle HTTP POST requests in Express.js version 4 and above, 
// you need to install the middleware module called body-parser.
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.options('/localhost:8000', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '/add'); // Replace * with the allowed origin
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE'); // List of allowed methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // List of allowed headers
    res.status(204).send();
});

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8000';

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));