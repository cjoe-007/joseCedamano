import { Controller, Get, Param, Post, Body, Res, HttpStatus, NotFoundException ,Query } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  async createTicket(@Body() createTicketDto, @Res() res) {
    try {
      const ticket = await this.ticketService.createTicket(createTicketDto);
      return res.status(HttpStatus.CREATED).json(ticket);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Error al crear el ticket', error});
    }
  }

  @Get(':id')
  async getTicketById(@Param('id') id: number) {
    try {
      const ticket = await this.ticketService.findTicketById(id);
      return ticket;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw error;
      }
    }
  }


  @Get()
  async findTickets(
    @Query('title') title: string, // Filtrado por título
    @Query('page') page: number = 1, // Página por defecto
    @Query('limit') limit: number = 10, // Límite por defecto
  ) {
    const filter = { title }; 

    const tickets = await this.ticketService.findTickets(filter, page, limit);
    return tickets;
  }
}
