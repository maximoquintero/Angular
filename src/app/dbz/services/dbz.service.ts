import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters:Character[] = [
    {
      id: uuid(),
      name:'Krilin',
      power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power:13000
    },
    {
      id: uuid(),
      name:'Vegetta',
      power:9500
    }
  ]

addCharacter(character:Character):void{
  const newCharacter:Character = {id: uuid(), ...character}

  this.characters.push(newCharacter);
}

onDeleteId(index:number):void{
  this.characters.splice(index,1);
}

deleteCharacterById(id:string):void{
  this.characters = this.characters.filter((character) => character.id != id);
}

}
