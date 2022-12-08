import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from '../main.nav/main.nav.component';
import { PresentationComponent } from '../presentation/presentation.component';
@Component({
  selector: 'app-english',
  standalone: true,
  imports: [CommonModule, MainNavComponent, PresentationComponent],
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent {

}
