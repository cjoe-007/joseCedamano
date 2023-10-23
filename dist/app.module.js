"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_entity_1 = require("./tickets/ticket.entity");
const ticket_controller_1 = require("./tickets/ticket.controller");
const ticket_service_1 = require("./tickets/ticket.service");
const upload_controller_1 = require("./cvs/upload.controller");
const upload_service_1 = require("./cvs/upload.service");
const platform_express_1 = require("@nestjs/platform-express");
const service_status_mock_service_1 = require("./ejercicio1/service-status-mock.service");
const service_status_mock_controller_1 = require("./ejercicio1/service-status-mock.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: 'postgresql://josecedamano:ex5o0CvbO44gJh1g7ZeiOQ@zippy-calf-5914.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
                synchronize: true,
                autoLoadEntities: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([ticket_entity_1.Ticket]),
            platform_express_1.MulterModule.register({
                dest: './uploads',
            }),
        ],
        controllers: [app_controller_1.AppController, ticket_controller_1.TicketController, upload_controller_1.UploadController, service_status_mock_controller_1.ServiceStatusMockController],
        providers: [app_service_1.AppService, ticket_service_1.TicketService, upload_service_1.UploadService, service_status_mock_service_1.ServiceStatusMockService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map