import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@demo/api/core/data-access'

import { AdminCreateProviderInput } from './dto/admin-create-provider.input'
import { AdminListProviderInput } from './dto/admin-list-provider.input'
import { AdminUpdateProviderInput } from './dto/admin-update-provider.input'

@Injectable()
export class ApiProviderDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminProviders(adminId: string, input?: AdminListProviderInput) {
    return this.data.provider.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountProviders(adminId: string, input?: AdminListProviderInput): Promise<CorePaging> {
    const total = await this.data.provider.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminProvider(adminId: string, providerId) {
    return this.data.provider.findUnique({ where: { id: providerId } })
  }

  adminCreateProvider(adminId: string, input: AdminCreateProviderInput) {
    return this.data.provider.create({
      data: { 
        name: input.name,
        firstName: input.firstName,
        lastName: input.lastName,
      },
    })
  }

  adminUpdateProvider(adminId: string, providerId, input: AdminUpdateProviderInput) {
    return this.data.provider.update({
      where: { id: providerId },
      data: { 
        name: input.name,
        firstName: input.firstName,
        lastName: input.lastName,
      },
    })
  }

  adminDeleteProvider(adminId: string, providerId) {
    return this.data.provider.delete({ where: { id: providerId } })
  }

  publicProviders() {
		return this.data.provider.findMany()
	}
}
