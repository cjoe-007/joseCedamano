// ticket-not-found.exception.ts

import { NotFoundException } from '@nestjs/common';

export class TicketNotFoundException extends NotFoundException {
  constructor(id: number) {
    super(`Ticket with ID ${id} not found`);
  }
}
