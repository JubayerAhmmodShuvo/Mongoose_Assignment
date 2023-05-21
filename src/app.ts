
import express, { Application, Response, Request, NextFunction } from 'express';
import cors from 'cors';
const app: Application = express();


app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




//app.use('/', );






export default app;