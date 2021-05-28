import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { validateRequest, BadRequestError, requireAuth } from '@tnttickets/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.post(
  '/api/tickets',
  requireAuth,
  [
    body('title')
      .not()
      .isEmpty()
      .withMessage('Title is required !'),
    body('price')
      .isFloat({ gt: 0 })
      .withMessage('Price is greater than 0 !')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, price } = req.body;

    const newTicket = Ticket.build({title, price, userId: req.currentUser!.id});

    await newTicket.save()

    res.status(200).send(newTicket);
  }
);

export { router as createTicketRouter };
