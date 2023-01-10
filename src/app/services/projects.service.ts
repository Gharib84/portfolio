import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private Projects: Project[] = [
    {
      id: 1,
      title: "Ecommerce Store",
      subTitle: "Ecommerce Store Is Web Application Built With Node Js , MYSQL Database, Material Design Boostrap5 [MDBOOTSTRAP] And HandelBars",
      description: ["The Philosophy Of Ecommerce Store Web Application Depend On Typescript Implementation From Frontend To BackEnd Where I Used Nest Typescript With Express js Spirit To Achieve"],
      feature: ["Home page: Will display a ShowCase For Ecommerce Store With welcome message and some images"],
      tags:["nest", "MVC", "Mysql", "Typescript"],
      imgUrl: "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"
    }
  ];

  constructor() { }

  projects():Observable<Project[]>{
    return from([this.Projects]);
  }
}
