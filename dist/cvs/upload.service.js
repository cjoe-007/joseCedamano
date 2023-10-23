"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const upload_dto_1 = require("./upload.dto");
const csv = require("csv-parser");
const fs = require("fs");
let UploadService = class UploadService {
    async processCSV(file) {
        const duplicates = new Set();
        let isEmpty = true;
        fs.createReadStream(file.path)
            .pipe(csv())
            .on('data', (data) => {
            isEmpty = false;
            const record = new upload_dto_1.UploadDTO();
            record.id = +data.id;
            record.balance = +data.balance;
            record.account = data.account;
            record.description = data.description;
            record.status = data.status;
            record.date = new Date(data.date);
            if (isNaN(record.id) || !Number.isInteger(record.id)) {
                throw new common_1.BadRequestException('Datos CSV inválidos: id debe ser un entero');
            }
            if (isNaN(record.balance)) {
                throw new common_1.BadRequestException('Datos CSV inválidos: balance debe ser un número');
            }
            if (typeof record.account !== 'string' || !['INTERNAL', 'PEOPLE', 'OPERATIONS'].includes(record.account)) {
                throw new common_1.BadRequestException('Datos CSV inválidos: account es inválido');
            }
            if (typeof record.description !== 'string' || record.description.length > 500) {
                throw new common_1.BadRequestException('Datos CSV inválidos: description es demasiado largo');
            }
            if (typeof record.status !== 'string' || !['PENDING', 'PROCESSED'].includes(record.status)) {
                throw new common_1.BadRequestException('Datos CSV inválidos: status es inválido');
            }
            if (isNaN(record.date.getTime()) ||
                !this.isToday(record.date) ||
                !this.isUTCDate(record.date)) {
                throw new common_1.BadRequestException('Datos CSV inválidos: fecha es inválida');
            }
            const isDuplicate = duplicates.has(record.id);
            if (isDuplicate) {
                throw new common_1.BadRequestException('Registro duplicado en el CSV');
            }
            duplicates.add(record.id);
        })
            .on('end', () => {
            if (isEmpty) {
                throw new common_1.BadRequestException('El archivo CSV está vacío');
            }
        });
    }
    isToday(date) {
        const today = new Date();
        return (date.getUTCFullYear() === today.getUTCFullYear() &&
            date.getUTCMonth() === today.getUTCMonth() &&
            date.getUTCDate() === today.getUTCDate());
    }
    isUTCDate(date) {
        return date.toISOString() === date.toISOString();
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
//# sourceMappingURL=upload.service.js.map