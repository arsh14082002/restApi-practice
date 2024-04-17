import express, { Request, Response, NextFunction } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import { config } from './config/config';
import globalHandlerErrors from './middleware/globalHandlerErrors';

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    message: 'api calls',
  });
});

app.use(globalHandlerErrors);

export default app;
