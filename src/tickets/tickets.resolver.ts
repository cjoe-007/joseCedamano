// tickets.resolver.ts

import { Resolver, Mutation, Args, Query,InputType, Field } from '@nestjs/graphql';
import { TicketService } from './ticket.service';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './ticket.dto';

@InputType()
class TicketFilterInput {
  @Field({ nullable: true }) // Puedes agregar otros campos de filtrado aquí
  title?: string;
}


@Resolver('Ticket')
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketService) {}

  @Mutation(() => Ticket)
  async createTicket(@Args('input') createTicketDto: CreateTicketDto): Promise<Ticket> {
    return this.ticketsService.createTicket(createTicketDto);
  }

  @Query(() => Ticket)
  async getTicketById(@Args('id') id: number): Promise<Ticket> {
    return this.ticketsService.findTicketById(id);
  }

  @Query(() => [Ticket])
  async findTickets(
    @Args('filter') filter: TicketFilterInput,
  @Args('page') page: number, 
  @Args('limit') limit: number, 
): Promise<Ticket[]> {
    return this.ticketsService.findTickets(filter, page, limit);
  }
}
