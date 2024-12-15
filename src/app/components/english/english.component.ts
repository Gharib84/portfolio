import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from '../main.nav/main.nav.component';
import { PresentationComponent } from '../presentation/presentation.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
@Component({
    selector: 'app-english',
    imports: [CommonModule, MainNavComponent, PresentationComponent, RouterModule,ContactComponent],
    templateUrl: './english.component.html',
    styleUrls: ['./english.component.scss']
})
export class EnglishComponent {

}
