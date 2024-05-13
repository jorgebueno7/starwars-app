import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../services/wiki.service';
import { People } from 'src/app/models/people';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  categories: string = "";
  id: string = "";
  title: string = "";
  people = new People;
  planet = new Planet;
  species = new Species;
  starship = new Starship;
  
  constructor(private route: ActivatedRoute, private srv: WikiService) { }

  ngOnInit() {
    this.categories = this.route.snapshot.paramMap.get("cat")??'';
    this.id = this.route.snapshot.paramMap.get("id")??'';
    this.srv.getArticle(this.categories, this.id).subscribe(
      (result: any) => {
        switch(this.categories) {
          case 'People':
            this.people = result.result.properties;
            this.title = this.people.name;
            break;
          case 'Planets':
            this.planet = result.result.properties;
            this.title = this.planet.name;
            break;
          case 'Species':
            this.species = result.result.properties;
            this.title = this.species.name;
            break;
          case 'Starships':
            this.starship = result.result.properties;
            this.title = this.starship.name;
            break;
      }
    });
  }
}
