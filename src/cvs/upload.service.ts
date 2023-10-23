import { Injectable, BadRequestException } from '@nestjs/common';
import { UploadDTO } from './upload.dto';
import * as csv from 'csv-parser';
import * as fs from 'fs';

@Injectable()
export class UploadService {
  async processCSV(file: Express.Multer.File): Promise<void> {
    const duplicates = new Set<number>();
    let isEmpty = true;

    fs.createReadStream(file.path)
      .pipe(csv())
      .on('data', (data) => {
        isEmpty = false;
        const record = new UploadDTO();

        record.id = +data.id;
        record.balance = +data.balance;
        record.account = data.account;
        record.description = data.description;
        record.status = data.status;
        record.date = new Date(data.date);

        // Validar que el id sea de tipo entero
        if (isNaN(record.id) || !Number.isInteger(record.id)) {
          throw new BadRequestException('Datos CSV inválidos: id debe ser un entero');
        }

        // Validar que el balance sea de tipo número
        if (isNaN(record.balance)) {
          throw new BadRequestException('Datos CSV inválidos: balance debe ser un número');
        }

        // Validar que el account sea una cadena y tenga valores válidos
        if (typeof record.account !== 'string' || !['INTERNAL', 'PEOPLE', 'OPERATIONS'].includes(record.account)) {
          throw new BadRequestException('Datos CSV inválidos: account es inválido');
        }

        // Validar que el description sea una cadena de 500 caracteres o menos
        if (typeof record.description !== 'string' || record.description.length > 500) {
          throw new BadRequestException('Datos CSV inválidos: description es demasiado largo');
        }

        // Validar que el status sea una cadena y tenga valores válidos
        if (typeof record.status !== 'string' || !['PENDING', 'PROCESSED'].includes(record.status)) {
          throw new BadRequestException('Datos CSV inválidos: status es inválido');
        }

        // Validar que la fecha tenga un formato de fecha UTC y sea del día actual
        if (
          isNaN(record.date.getTime()) ||
          !this.isToday(record.date) ||
          !this.isUTCDate(record.date)
        ) {
          throw new BadRequestException('Datos CSV inválidos: fecha es inválida');
        }

        const isDuplicate = duplicates.has(record.id);
        if (isDuplicate) {
          throw new BadRequestException('Registro duplicado en el CSV');
        }

        duplicates.add(record.id);
      })
      .on('end', () => {
        if (isEmpty) {
          throw new BadRequestException('El archivo CSV está vacío');
        }

      });
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getUTCFullYear() === today.getUTCFullYear() &&
      date.getUTCMonth() === today.getUTCMonth() &&
      date.getUTCDate() === today.getUTCDate()
    );
  }

  private isUTCDate(date: Date): boolean {
    return date.toISOString() === date.toISOString();
  }
}
