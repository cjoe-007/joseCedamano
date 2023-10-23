import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ticket } from './tickets/ticket.entity';
import { TicketController } from './tickets/ticket.controller';
import { TicketService } from './tickets/ticket.service';
import { UploadController } from './cvs/upload.controller'
import { UploadService } from './cvs/upload.service'
import { MulterModule } from '@nestjs/platform-express';
import { ServiceStatusMockService } from './ejercicio1/service-status-mock.service'
import { ServiceStatusMockController } from './ejercicio1/service-status-mock.controller'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://josecedamano:ex5o0CvbO44gJh1g7ZeiOQ@zippy-calf-5914.g8z.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full',
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([Ticket]),
    MulterModule.register({
      dest: './uploads', // Directorio de destino para los archivos cargados
    }),
  ],
  controllers: [AppController, TicketController, UploadController, ServiceStatusMockController],
  providers: [AppService, TicketService, UploadService, ServiceStatusMockService],
})
export class AppModule {}
