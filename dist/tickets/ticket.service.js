"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
const ticket_not_found_exception_1 = require("./ticket-not-found.exception");
let TicketService = class TicketService {
    constructor(ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    async createTicket(createTicketDto) {
        const ticket = this.ticketRepository.create(createTicketDto);
        return await this.ticketRepository.save(ticket);
    }
    async findTicketById(id) {
        const ticket = await this.ticketRepository.findOne({ where: { id } });
        if (!ticket) {
            throw new ticket_not_found_exception_1.TicketNotFoundException(id);
        }
        return ticket;
    }
    async findTickets(filter, page, limit) {
        const query = this.ticketRepository.createQueryBuilder('ticket');
        if (filter.title) {
            query.andWhere('ticket.title LIKE :title', { title: `%${filter.title}%` });
        }
        query.skip((page - 1) * limit).take(limit);
        return query.getMany();
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TicketService);
//# sourceMappingURL=ticket.service.js.map