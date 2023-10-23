import { ServiceStatusMockService } from './service-status-mock.service';
import { ServiceStatusDTO } from './service-status.dto';
export declare class ServiceStatusMockController {
    private readonly serviceStatusMockService;
    constructor(serviceStatusMockService: ServiceStatusMockService);
    getServiceStatus(id: number): ServiceStatusDTO;
}
