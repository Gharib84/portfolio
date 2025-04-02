import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';
import { ButtonsComponent } from '../buttons.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FadeInDirective } from '../contact/directives/fade-in.directive';
import * as THREE from 'three';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
@Component({
    selector: 'app-projects',
    imports: [CommonModule,TranslatePipe,FadeInDirective],
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
