import { TicketService } from './ticket.service';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    createTicket(createTicketDto: any, res: any): Promise<any>;
    getTicketById(id: number): Promise<import("./ticket.entity").Ticket>;
    findTickets(title: string, page?: number, limit?: number): Promise<import("./ticket.entity").Ticket[]>;
}
