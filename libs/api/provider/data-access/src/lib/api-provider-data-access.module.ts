import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@demo/api/core/data-access'

import { ApiProviderDataAccessService } from './api-provider-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiProviderDataAccessService],
  exports: [ApiProviderDataAccessService],
})
export class ApiProviderDataAccessModule {}
