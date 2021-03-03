import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateProviderInput,
  AdminListProviderInput,
  AdminUpdateProviderInput,
  ApiProviderDataAccessService,
  Provider,
} from '@demo/api/provider/data-access'
import { CorePaging } from '@demo/api/core/data-access'
import {
  CtxUser,
  GqlAuthAdminGuard,
} from '@demo/api/auth/util'
import { User } from '@demo/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiProviderFeatureAdminResolver {
  constructor(private readonly service: ApiProviderDataAccessService) {}

  @Query(() => [Provider], { nullable: true })
  adminProviders(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListProviderInput, nullable: true }) input?: AdminListProviderInput,
  ) {
    return this.service.adminProviders(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountProviders(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListProviderInput, nullable: true }) input?: AdminListProviderInput,
  ) {
    return this.service.adminCountProviders(admin.id, input)
  }

  @Query(() => Provider, { nullable: true })
  adminProvider(@CtxUser() admin: User, @Args('providerId') providerId: string) {
    return this.service.adminProvider(admin.id, providerId)
  }

  @Mutation(() => Provider, { nullable: true })
  adminCreateProvider(@CtxUser() admin: User,@Args('input') input: AdminCreateProviderInput,) {
    return this.service.adminCreateProvider(admin.id, input)
  }

  @Mutation(() => Provider, { nullable: true })
  adminUpdateProvider(
    @CtxUser() admin: User,
    @Args('providerId') providerId: string,
    @Args('input') input: AdminUpdateProviderInput,
  ) {
    return this.service.adminUpdateProvider(admin.id, providerId, input)
  }

  @Mutation(() => Provider, { nullable: true })
  adminDeleteProvider(@CtxUser() admin: User, @Args('providerId') providerId: string) {
    return this.service.adminDeleteProvider(admin.id, providerId)
  }
}
