import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateProviderInput {
  @Field()
  name: string

  @Field({nullable:true})
  firstName?: string

  @Field({nullable:true})
  lastName?: string
}
