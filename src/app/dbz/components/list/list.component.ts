import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacter = new EventEmitter<string>();

  @Input()
  public characterList:Character[] = []

  onDeleteId(id?:string):void{
    if(!id)return
    // console.log(id)
    this.onDeleteCharacter.emit(id)
  }

}
