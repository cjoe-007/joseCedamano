import { NotFoundException } from '@nestjs/common';
export declare class TicketNotFoundException extends NotFoundException {
    constructor(id: number);
}
