import { Injectable } from '@nestjs/common';
import { ServiceStatusDTO } from './service-status.dto';

@Injectable()
export class ServiceStatusMockService {
  private simulatedServiceStatuses: ServiceStatusDTO[] = [
    { id: 1, state: 604 },
    { id: 2, state: 606 },
    { id: 3, state: 607 },
  ];

  getServiceStatus(id: number): ServiceStatusDTO {
    const status = this.simulatedServiceStatuses.find((status) => status.id === id);
    return status;
  }
}
