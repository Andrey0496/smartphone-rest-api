import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import setGlobalMiddleware from './middleware/setGlobalMiddleware';
import dbConnect from './db';

dotenv.config();

const app = express();

setGlobalMiddleware(app);

//dbConnect();

app.get('/*',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
});

export default app;
