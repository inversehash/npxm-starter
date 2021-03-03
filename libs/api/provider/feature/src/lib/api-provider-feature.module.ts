import { Module } from '@nestjs/common'
import { ApiProviderDataAccessModule } from '@demo/api/provider/data-access'
import {ApiProviderFeaturePublicResolver} from './api-provider-feature-public.resolver'
import { ApiProviderFeatureAdminResolver } from './api-provider-feature-admin.resolver'

@Module({
  imports: [ApiProviderDataAccessModule],
  providers: [ApiProviderFeatureAdminResolver,ApiProviderFeaturePublicResolver],
})
export class ApiProviderFeatureModule {}
