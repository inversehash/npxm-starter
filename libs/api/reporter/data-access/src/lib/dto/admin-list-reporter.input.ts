import { Field, InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@demo/api/core/data-access'

@InputType()
export class AdminListReporterInput extends CorePagingInput {
  @Field({ nullable: true })
  name?: string
}
