import { Query,Resolver } from "@nestjs/graphql";
import {ApiCompanyDataAccessService, Company} from '@demo/api/company/data-access'
@Resolver()
export class ApiCompanyFeaturePublicResolver{

    constructor(private readonly service:ApiCompanyDataAccessService){

    }
    @Query(() => [Company], {nullable: true})
    publicCompanys(){
        return this.service.publicCompanys();
    }
}