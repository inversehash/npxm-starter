import { Query, Resolver } from '@nestjs/graphql'
import { Reporter,ApiReporterDataAccessService } from '@demo/api/reporter/data-access'
@Resolver()
export class ApiReporterFeaturePublicResolver {
    constructor(private readonly service : ApiReporterDataAccessService ){}
    
    @Query(()=>[Reporter],{nullable:true})
    publicReporters() {
        return this.service.publicReporters();
    }
}