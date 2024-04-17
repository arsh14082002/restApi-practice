import { HttpError } from 'http-errors';
import { config } from '../config/config';
import { Response, Request, NextFunction } from 'express';

//global error handling
const globalHandlerErrors = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const errorStack = config.env == 'development' ? err.stack : '';
};

export default globalHandlerErrors;
