import express, { Request, Response } from 'express';

import { requireAuth, NotFoundError } from '@tnttickets/common';
import { Ticket } from '../models/ticket';

const router = express.Router();

router.get(
  '/api/tickets/:id',
  requireAuth,
  async (req: Request, res: Response) => {

    const ticket = await Ticket.findById(req.params.id)

    if(!ticket) {
        throw new NotFoundError();
    }


    res.status(200).send(ticket);
  }
);

export { router as showTicketRouter };
