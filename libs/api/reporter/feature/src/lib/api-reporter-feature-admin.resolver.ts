import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateReporterInput,
  AdminListReporterInput,
  AdminUpdateReporterInput,
  ApiReporterDataAccessService,
  Reporter,
} from '@demo/api/reporter/data-access'
import { CorePaging } from '@demo/api/core/data-access'
import {
  CtxUser,
  GqlAuthAdminGuard,
} from '@demo/api/auth/util'
import { User } from '@demo/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiReporterFeatureAdminResolver {
  constructor(private readonly service: ApiReporterDataAccessService) {}

  @Query(() => [Reporter], { nullable: true })
  adminReporters(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListReporterInput, nullable: true }) input?: AdminListReporterInput,
  ) {
    return this.service.adminReporters(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountReporters(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListReporterInput, nullable: true }) input?: AdminListReporterInput,
  ) {
    return this.service.adminCountReporters(admin.id, input)
  }

  @Query(() => Reporter, { nullable: true })
  adminReporter(@CtxUser() admin: User, @Args('reporterId') reporterId: string) {
    return this.service.adminReporter(admin.id, reporterId)
  }

  @Mutation(() => Reporter, { nullable: true })
  adminCreateReporter(@CtxUser() admin: User,@Args('input') input: AdminCreateReporterInput,) {
    return this.service.adminCreateReporter(admin.id, input)
  }

  @Mutation(() => Reporter, { nullable: true })
  adminUpdateReporter(
    @CtxUser() admin: User,
    @Args('reporterId') reporterId: string,
    @Args('input') input: AdminUpdateReporterInput,
  ) {
    return this.service.adminUpdateReporter(admin.id, reporterId, input)
  }

  @Mutation(() => Reporter, { nullable: true })
  adminDeleteReporter(@CtxUser() admin: User, @Args('reporterId') reporterId: string) {
    return this.service.adminDeleteReporter(admin.id, reporterId)
  }
}
