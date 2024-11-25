import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ButtonsComponent } from '../buttons.component';
import { ExperienceComponent } from '../experience.component';
import { CardComponent } from '../cards/card.component';
@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsComponent,ButtonsComponent,ExperienceComponent,CardComponent],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

}
