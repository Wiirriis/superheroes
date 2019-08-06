import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {


  heroes:any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) {
      
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      this.termino = params['termino'];
    })
  }

}
