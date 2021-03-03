import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@demo/api/core/data-access'

import { ApiReporterDataAccessService } from './api-reporter-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiReporterDataAccessService],
  exports: [ApiReporterDataAccessService],
})
export class ApiReporterDataAccessModule {}
