import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import {
  AdminCreateCompanyInput,
  AdminListCompanyInput,
  AdminUpdateCompanyInput,
  ApiCompanyDataAccessService,
  Company,
} from '@demo/api/company/data-access'
import { CorePaging } from '@demo/api/core/data-access'
import {
  CtxUser,
  GqlAuthAdminGuard,
} from '@demo/api/auth/util'
import { User } from '@demo/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiCompanyFeatureAdminResolver {
  constructor(private readonly service: ApiCompanyDataAccessService) {}

  @Query(() => [Company], { nullable: true })
  adminCompanys(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.adminCompanys(admin.id, input)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountCompanys(
    @CtxUser() admin: User,
    @Args({ name: 'input', type: () => AdminListCompanyInput, nullable: true }) input?: AdminListCompanyInput,
  ) {
    return this.service.adminCountCompanys(admin.id, input)
  }

  @Query(() => Company, { nullable: true })
  adminCompany(@CtxUser() admin: User, @Args('companyId') companyId: string) {
    return this.service.adminCompany(admin.id, companyId)
  }

  @Mutation(() => Company, { nullable: true })
  adminCreateCompany(@CtxUser() admin: User,@Args('input') input: AdminCreateCompanyInput,) {
    return this.service.adminCreateCompany(admin.id, input)
  }

  @Mutation(() => Company, { nullable: true })
  adminUpdateCompany(
    @CtxUser() admin: User,
    @Args('companyId') companyId: string,
    @Args('input') input: AdminUpdateCompanyInput,
  ) {
    return this.service.adminUpdateCompany(admin.id, companyId, input)
  }

  @Mutation(() => Company, { nullable: true })
  adminDeleteCompany(@CtxUser() admin: User, @Args('companyId') companyId: string) {
    return this.service.adminDeleteCompany(admin.id, companyId)
  }
}
