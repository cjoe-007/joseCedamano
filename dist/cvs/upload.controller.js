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
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("@nestjs/platform-express/multer");
const upload_service_1 = require("./upload.service");
const common_2 = require("@nestjs/common");
const path = require("path");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadCSV(file, res) {
        try {
            const extname = path.extname(file.originalname);
            if (extname.toLowerCase() !== '.csv') {
                throw new common_2.HttpException('El archivo no tiene la extensión .csv', common_2.HttpStatus.BAD_REQUEST);
            }
            await this.uploadService.processCSV(file);
            res.status(200).json({ message: 'Archivo CSV cargado y procesado con éxito' });
        }
        catch (error) {
            if (error instanceof common_2.HttpException) {
                res.status(error.getStatus()).json({ error: error.message });
            }
            else {
                res.status(common_2.HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Ocurrió un error interno en el servidor' });
            }
        }
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('csv'),
    (0, common_1.UseInterceptors)((0, multer_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadCSV", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [upload_service_1.UploadService])
], UploadController);
//# sourceMappingURL=upload.controller.js.map