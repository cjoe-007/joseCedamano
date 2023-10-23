/// <reference types="multer" />
export declare class UploadService {
    processCSV(file: Express.Multer.File): Promise<void>;
    private isToday;
    private isUTCDate;
}
