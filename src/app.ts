import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.json({
    message: 'api calls',
  });
});

export default app;
