import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Category } from '../models/category';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {
  @Input() theCategory = new Category();
  @Input() selected = false;
  @Output() clicked = new EventEmitter<string>();

  articles: any[] = [];

  getArticles(category: string){
    this.wikiSrv.getAllArticles(category).subscribe(
      (result: any) => {
        this.articles = result.results;
      }
    )
  }
  constructor(private wikiSrv: WikiService) {}
  ngOnInit() {
  }

  click() {
    this.clicked.emit(this.theCategory.name);
    this.getArticles(this.theCategory.name);
    console.log("Clicked on " + this.theCategory.name);
  }

  generateURL(cat: string, id: string){
    return "tabs/wiki/article/" + cat + "/" + id;
  }

}
