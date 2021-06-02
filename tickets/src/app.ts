import express from 'express';
import 'express-async-errors';

import cookieSession from 'cookie-session';

import { currentUser, errorHandler, NotFoundError } from '@tnttickets/common';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: true
  })
);


app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
app.use(currentUser);
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter)


export { app }