import { Controller, Post, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { UploadService } from './upload.service';
import { Response } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as path from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('csv')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCSV(@UploadedFile() file: Express.Multer.File, @Res() res: Response) {
    try {
      // Validar la extensión del archivo
      const extname = path.extname(file.originalname);
      if (extname.toLowerCase() !== '.csv') {
        throw new HttpException('El archivo no tiene la extensión .csv', HttpStatus.BAD_REQUEST);
      }

      await this.uploadService.processCSV(file);
      res.status(200).json({ message: 'Archivo CSV cargado y procesado con éxito' });
    } catch (error) {
      if (error instanceof HttpException) {
        res.status(error.getStatus()).json({ error: error.message });
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Ocurrió un error interno en el servidor' });
      }
    }
  }
}
