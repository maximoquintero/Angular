import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 30;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescripton():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Fernando';
  }

  changeAge():void{
    this.age = 40;
  }

  resertForm():void{
    this.name = 'ironman';
    this.age = 30;
  }
}
