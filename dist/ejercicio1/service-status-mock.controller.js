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
exports.ServiceStatusMockController = void 0;
const common_1 = require("@nestjs/common");
const service_status_mock_service_1 = require("./service-status-mock.service");
const service_status_dto_1 = require("./service-status.dto");
let ServiceStatusMockController = class ServiceStatusMockController {
    constructor(serviceStatusMockService) {
        this.serviceStatusMockService = serviceStatusMockService;
    }
    getServiceStatus(id) {
        const status = this.serviceStatusMockService.getServiceStatus(id);
        if (!status) {
            throw new common_1.NotFoundException(`No se encontró un servicio con ID ${id}`);
        }
        return status;
    }
};
exports.ServiceStatusMockController = ServiceStatusMockController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", service_status_dto_1.ServiceStatusDTO)
], ServiceStatusMockController.prototype, "getServiceStatus", null);
exports.ServiceStatusMockController = ServiceStatusMockController = __decorate([
    (0, common_1.Controller)('service-status-mock'),
    __metadata("design:paramtypes", [service_status_mock_service_1.ServiceStatusMockService])
], ServiceStatusMockController);
//# sourceMappingURL=service-status-mock.controller.js.map