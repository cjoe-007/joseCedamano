"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class TicketNotFoundException extends common_1.NotFoundException {
    constructor(id) {
        super(`Ticket with ID ${id} not found`);
    }
}
exports.TicketNotFoundException = TicketNotFoundException;
//# sourceMappingURL=ticket-not-found.exception.js.map