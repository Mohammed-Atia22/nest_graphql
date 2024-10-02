/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Resolver,Query, Mutation, Args, Int, ResolveField } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pet.entity';
import { createPetInput } from './DTO/create-pet.input';
import { Owner } from 'src/owners/entities/owner.entity';
import { Parent } from '@nestjs/graphql';

@Resolver((of: any) => Pet)
export class PetsResolver {
    constructor(private petsService:PetsService){}

    @Query(returns => Pet)
    getPet(@Args('id',{type:()=>Int}) id:number):Promise<Pet>{
        return this.petsService.findOne(id);
    }

    @Query(returns => [Pet])
    pets():Promise<Pet[]>{
        return this.petsService.findAll();
    }

    @ResolveField((returns) => Owner)
    owner(@Parent() pet:Pet){
        return this.petsService.getOwner(pet.ownerId);
    }

    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') createPetInput:createPetInput):Promise<Pet>{
        return this.petsService.createPet(createPetInput);
    }
}
