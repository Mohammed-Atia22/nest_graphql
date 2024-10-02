/* eslint-disable prettier/prettier */
import { InputType, Field } from '@nestjs/graphql';
//import { Column } from 'typeorm';

@InputType()
export class CreateOwnerInput {
  @Field()
  name: string;
}
