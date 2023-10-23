import { TicketService } from './ticket.service';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './ticket.dto';
declare class TicketFilterInput {
    title?: string;
}
export declare class TicketsResolver {
    private readonly ticketsService;
    constructor(ticketsService: TicketService);
    createTicket(createTicketDto: CreateTicketDto): Promise<Ticket>;
    getTicketById(id: number): Promise<Ticket>;
    findTickets(filter: TicketFilterInput, page: number, limit: number): Promise<Ticket[]>;
}
export {};
