import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from 'angular-dark-mode';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-nav',
    imports: [CommonModule, RouterModule],
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
