import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.nav.component.html',
  styleUrls: ['./main.nav.component.scss']
})
export class MainNavComponent {

  public readonly myName:string = "EDI";
  public readonly projects:string = "Projects";
  public readonly contact:string = "Contact";

  darkMode$ = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService){

  }

  onToggle(): void {
    this.darkModeService.toggle();
  }


}
