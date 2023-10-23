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
exports.TicketsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const ticket_service_1 = require("./ticket.service");
const ticket_entity_1 = require("./ticket.entity");
const ticket_dto_1 = require("./ticket.dto");
let TicketFilterInput = class TicketFilterInput {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TicketFilterInput.prototype, "title", void 0);
TicketFilterInput = __decorate([
    (0, graphql_1.InputType)()
], TicketFilterInput);
let TicketsResolver = class TicketsResolver {
    constructor(ticketsService) {
        this.ticketsService = ticketsService;
    }
    async createTicket(createTicketDto) {
        return this.ticketsService.createTicket(createTicketDto);
    }
    async getTicketById(id) {
        return this.ticketsService.findTicketById(id);
    }
    async findTickets(filter, page, limit) {
        return this.ticketsService.findTickets(filter, page, limit);
    }
};
exports.TicketsResolver = TicketsResolver;
__decorate([
    (0, graphql_1.Mutation)(() => ticket_entity_1.Ticket),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketsResolver.prototype, "createTicket", null);
__decorate([
    (0, graphql_1.Query)(() => ticket_entity_1.Ticket),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketsResolver.prototype, "getTicketById", null);
__decorate([
    (0, graphql_1.Query)(() => [ticket_entity_1.Ticket]),
    __param(0, (0, graphql_1.Args)('filter')),
    __param(1, (0, graphql_1.Args)('page')),
    __param(2, (0, graphql_1.Args)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [TicketFilterInput, Number, Number]),
    __metadata("design:returntype", Promise)
], TicketsResolver.prototype, "findTickets", null);
exports.TicketsResolver = TicketsResolver = __decorate([
    (0, graphql_1.Resolver)('Ticket'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketsResolver);
//# sourceMappingURL=tickets.resolver.js.map