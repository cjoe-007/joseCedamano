import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './ticket.dto';
export declare class TicketService {
    private readonly ticketRepository;
    constructor(ticketRepository: Repository<Ticket>);
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    findTicketById(id: number): Promise<Ticket>;
    findTickets(filter: any, page: number, limit: number): Promise<Ticket[]>;
}
