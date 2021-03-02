import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateCompanyInput {
  
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  addressLine1?: string
  
  @Field({ nullable: true })
  addressLine2?: string

  @Field({ nullable: true })
  city?: string

  @Field({ nullable: true })
  stateOrProvince?: string

  @Field({ nullable: true })
  postalCode?: string

  @Field({ nullable: true })
  country?: string

  @Field({ nullable: true })
  phoneNumber?: string

}
