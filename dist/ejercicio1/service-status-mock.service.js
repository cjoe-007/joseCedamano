"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceStatusMockService = void 0;
const common_1 = require("@nestjs/common");
let ServiceStatusMockService = class ServiceStatusMockService {
    constructor() {
        this.simulatedServiceStatuses = [
            { id: 1, state: 604 },
            { id: 2, state: 606 },
            { id: 3, state: 607 },
        ];
    }
    getServiceStatus(id) {
        const status = this.simulatedServiceStatuses.find((status) => status.id === id);
        return status;
    }
};
exports.ServiceStatusMockService = ServiceStatusMockService;
exports.ServiceStatusMockService = ServiceStatusMockService = __decorate([
    (0, common_1.Injectable)()
], ServiceStatusMockService);
//# sourceMappingURL=service-status-mock.service.js.map