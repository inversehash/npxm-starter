import { Module } from '@nestjs/common'
import { ApiReporterDataAccessModule } from '@demo/api/reporter/data-access'
import {ApiReporterFeaturePublicResolver} from './api-reporter-feature-public.resolver'
import { ApiReporterFeatureAdminResolver } from './api-reporter-feature-admin.resolver'

@Module({
  imports: [ApiReporterDataAccessModule],
  providers: [ApiReporterFeatureAdminResolver,ApiReporterFeaturePublicResolver],
})
export class ApiReporterFeatureModule {}
