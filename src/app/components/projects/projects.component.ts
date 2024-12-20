import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';
import { CardComponent } from '../cards/card.component';
import { ButtonsComponent } from '../buttons.component';
@Component({
    selector: 'app-projects',
    imports: [CommonModule, CardComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor(private projectService:ProjectsService){

  }


  myProjects(){
    return this.projectService.projects();
  }

}
