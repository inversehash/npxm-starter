import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateCompanyInput {
  @Field()
  name: string

  @Field()
  addressLine1: string

  @Field()
  addressLine2: string

  @Field()
  city: string

  @Field()
  stateOrProvince: string

  @Field()
  postalCode: string

  @Field()
  country: string

  @Field()
  phoneNumber: string
}
