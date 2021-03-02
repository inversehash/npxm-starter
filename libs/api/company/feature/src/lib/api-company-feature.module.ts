import { Module } from '@nestjs/common'
import { ApiCompanyDataAccessModule } from '@demo/api/company/data-access'

import { ApiCompanyFeatureAdminResolver } from './api-company-feature-admin.resolver'
import { ApiCompanyFeaturePublicResolver } from './api-company-feature-public.resolver'

@Module({
  imports: [ApiCompanyDataAccessModule],
  providers: [ApiCompanyFeatureAdminResolver,ApiCompanyFeaturePublicResolver],
})
export class ApiCompanyFeatureModule {}
