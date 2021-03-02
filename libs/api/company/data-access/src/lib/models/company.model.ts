import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Company {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

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
  country?: string

  @Field({ nullable: true })
  phoneNumber?: string

  @Field({nullable: true})
  postalCode?: string

}
