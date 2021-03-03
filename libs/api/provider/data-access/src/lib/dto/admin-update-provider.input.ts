import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateProviderInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  firstName?: string

  @Field({ nullable: true })
  lastName?: string
}
