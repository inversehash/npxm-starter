import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@demo/api/core/data-access'

import { AdminCreateCompanyInput } from './dto/admin-create-company.input'
import { AdminListCompanyInput } from './dto/admin-list-company.input'
import { AdminUpdateCompanyInput } from './dto/admin-update-company.input'

@Injectable()
export class ApiCompanyDataAccessService {
  publicCompanys() {
      return this.data.company.findMany();
      //throw new Error("Method not implemented.")
  }
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminCompanys(adminId: string, input?: AdminListCompanyInput) {
    return this.data.company.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountCompanys(adminId: string, input?: AdminListCompanyInput): Promise<CorePaging> {
    const total = await this.data.company.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminCompany(adminId: string, companyId) {
    return this.data.company.findUnique({ where: { id: companyId } })
  }

  adminCreateCompany(adminId: string, input: AdminCreateCompanyInput) {
    return this.data.company.create({
      data: { 
        name: input.name,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        stateOrProvince: input.stateOrProvince,
        postalCode: input.postalCode,
        country: input.country,
        phoneNumber : input.phoneNumber
      },
    })
  }

  adminUpdateCompany(adminId: string, companyId, input: AdminUpdateCompanyInput) {
    return this.data.company.update({
      where: { id: companyId },
      data: { 
        name: input.name,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        city: input.city,
        stateOrProvince: input.stateOrProvince,
        postalCode: input.postalCode,
        country: input.country,
        phoneNumber : input.phoneNumber
       },
    })
  }

  adminDeleteCompany(adminId: string, companyId) {
    return this.data.company.delete({ where: { id: companyId } })
  }
}
