import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  readonly categoriesMockup:string = "./assets/data/categories.json";
  
  categories: Category[] = [];

  selectedCategory: string = "";
  
  selectCategory(name: string){
    this.selectedCategory = name;
  }
  constructor() { }
  ngOnInit() {
    this.getData();  
  }
  
  getData() {
    fetch(this.categoriesMockup).then(res => res.json())
    .then(json => {
      this.categories = json;
    })
  }
}
