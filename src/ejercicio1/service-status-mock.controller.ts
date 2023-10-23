import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { ServiceStatusMockService } from './service-status-mock.service';
import { ServiceStatusDTO } from './service-status.dto';

@Controller('service-status-mock')
export class ServiceStatusMockController {
  constructor(private readonly serviceStatusMockService: ServiceStatusMockService) {}

  @Get(':id')
  getServiceStatus(@Param('id') id: number): ServiceStatusDTO {
    const status = this.serviceStatusMockService.getServiceStatus(id);
    if (!status) {
      throw new NotFoundException(`No se encontró un servicio con ID ${id}`);
    }
    return status;
  }
}
