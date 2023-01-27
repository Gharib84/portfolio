import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectsComponent],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

}
