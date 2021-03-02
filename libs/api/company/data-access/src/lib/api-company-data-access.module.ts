import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@demo/api/core/data-access'

import { ApiCompanyDataAccessService } from './api-company-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiCompanyDataAccessService],
  exports: [ApiCompanyDataAccessService],
})
export class ApiCompanyDataAccessModule {}
