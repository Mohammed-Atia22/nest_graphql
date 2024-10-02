/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {Pet} from './pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPetInput } from './DTO/create-pet.input';
import { OwnersService } from 'src/owners/owners.service';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository:Repository<Pet>, private ownerService:OwnersService){}
    
    createPet(createPetInput:createPetInput):Promise<Pet>{
        const newPet = this.petsRepository.create(createPetInput);
        return this.petsRepository.save(newPet);
    }
    
    async findAll():Promise<Pet[]>{
        return this.petsRepository.find();
    }

    findOne(id:number):Promise<Pet>{
        return this.petsRepository.findOne({where:{id:id}});
    }

    getOwner(ownerId:number){
        return this.ownerService.findOne(ownerId);
    }
}
