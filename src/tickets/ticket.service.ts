// ticket.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder  } from 'typeorm';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './ticket.dto';
import { TicketNotFoundException } from './ticket-not-found.exception'

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async createTicket(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create(createTicketDto);
    return await this.ticketRepository.save(ticket);
  }

  async findTicketById(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({ where: { id } });
    if (!ticket) {
      throw new TicketNotFoundException(id);
    }
    return ticket;
  }

  async findTickets(filter: any, page: number, limit: number): Promise<Ticket[]> {
    const query: SelectQueryBuilder<Ticket> = this.ticketRepository.createQueryBuilder('ticket');

    if (filter.title) {
      query.andWhere('ticket.title LIKE :title', { title: `%${filter.title}%` });
    }

    // Paginación
    query.skip((page - 1) * limit).take(limit);

    return query.getMany();
  }
}
