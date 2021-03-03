import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@demo/api/core/data-access'

import { AdminCreateReporterInput } from './dto/admin-create-reporter.input'
import { AdminListReporterInput } from './dto/admin-list-reporter.input'
import { AdminUpdateReporterInput } from './dto/admin-update-reporter.input'

@Injectable()
export class ApiReporterDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminReporters(adminId: string, input?: AdminListReporterInput) {
    return this.data.reporter.findMany({
      take: input?.limit,
      skip: input?.skip,
    })
  }

  async adminCountReporters(adminId: string, input?: AdminListReporterInput): Promise<CorePaging> {
    const total = await this.data.reporter.count()
    return {
      limit: input?.limit,
      skip: input?.skip,
      total,
    }
  }

  adminReporter(adminId: string, reporterId) {
    return this.data.reporter.findUnique({ where: { id: reporterId } })
  }

  adminCreateReporter(adminId: string, input: AdminCreateReporterInput) {
    return this.data.reporter.create({
      data: { 
        name: input.name,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        addressCity: input.addressCity,
        addressState: input.addressState,
        addressPostalCode: input.addressPostalCode,
        phoneNumber: input.phoneNumber,
        profession: input.profession,
        faxNumber: input.faxNumber, 
      },
    })
  }

  adminUpdateReporter(adminId: string, reporterId, input: AdminUpdateReporterInput) {
    return this.data.reporter.update({
      where: { id: reporterId },
      data: { 
        name: input.name,
        addressLine1: input.addressLine1,
        addressLine2: input.addressLine2,
        addressCity: input.addressCity,
        addressState: input.addressState,
        addressPostalCode: input.addressPostalCode,
        phoneNumber: input.phoneNumber,
        profession: input.profession,
        faxNumber: input.faxNumber, 
      },
    })
  }

  adminDeleteReporter(adminId: string, reporterId) {
    return this.data.reporter.delete({ where: { id: reporterId } })
  }

  publicReporters() {
		return this.data.reporter.findMany()
	}
}
