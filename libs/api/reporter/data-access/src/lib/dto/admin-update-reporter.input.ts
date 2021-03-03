import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateReporterInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  addressLine1?: string

  @Field({ nullable: true })
  addressLine2?: string

  @Field({ nullable: true })
  addressCity?: string

  @Field({ nullable: true })
  addressState?: string

  @Field({ nullable: true })
  addressPostalCode?: string

  @Field({ nullable: true })
  phoneNumber?: string

  @Field({ nullable: true })
  profession?: string

  @Field({ nullable: true })
  faxNumber?: string
}
