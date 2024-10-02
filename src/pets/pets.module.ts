/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { OwnersModule } from 'src/owners/owners.module';

@Module({
  imports:[TypeOrmModule.forFeature([Pet]),OwnersModule],
  providers: [PetsService, PetsResolver],
  controllers: [PetsController]
})
export class PetsModule {}
