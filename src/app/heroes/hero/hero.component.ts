import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Ironman';
  public age:number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name} - ${this.age}`;
  }

  changeHero():void{
    // if (this.name == 'ironman'){
    //   this.name = 'spiderman';
    // }else{
    //   this.name = 'ironman';
    // }
    this.name = 'Spiderman';

  }

  changeAge():void {
    // if (this.age == 45){
    //   this.age = 23;
    // }else{
    //   this.age = 45;
    // }
    this.age = 23;
  }

  resetForm():void {
    this.name ='Ironman';
    this.age = 45;
  }

}
