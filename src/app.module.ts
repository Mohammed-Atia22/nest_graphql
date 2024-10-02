/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig , ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from './owners/owners.module';
// GraphQLModule.forRoot<ApolloDriverConfig>({
//   driver: ApolloDriver,
// })


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile:join(process.cwd(),'src/schema.gql'),
    driver: ApolloDriver,
  }),
  PetsModule,
  TypeOrmModule.forRoot({
    type:'sqlite',
    database:':memory:',
    entities:['dist/**/*.entity{.ts,.js}'],
    synchronize:true,
  }),
  OwnersModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
