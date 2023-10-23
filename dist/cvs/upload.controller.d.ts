/// <reference types="multer" />
import { UploadService } from './upload.service';
import { Response } from 'express';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadCSV(file: Express.Multer.File, res: Response): Promise<void>;
}
