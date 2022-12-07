import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavComponent } from '../main.nav/main.nav.component';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [CommonModule, MainNavComponent],
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent {

}
