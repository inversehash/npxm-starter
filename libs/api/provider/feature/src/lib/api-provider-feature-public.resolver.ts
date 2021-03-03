import { Query, Resolver } from '@nestjs/graphql'
import { Provider,ApiProviderDataAccessService } from '@demo/api/provider/data-access'

@Resolver()

export class ApiProviderFeaturePublicResolver {
    constructor(private readonly service : ApiProviderDataAccessService ){}
    
    @Query(()=>[Provider],{nullable:true})
    publicProviders() {
        return this.service.publicProviders();
    }
}