import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any=[];

  constructor(private activatedRoute:ActivatedRoute,
              private heroesService:HeroesService,
              private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
    
  }


  volver(){
    this.router.navigate(['heroes']);
  }


}
