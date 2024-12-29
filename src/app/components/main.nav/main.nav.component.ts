import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from 'angular-dark-mode';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-nav',
    imports: [CommonModule, RouterModule,TranslatePipe],
    templateUrl: './main.nav.component.html',
    styleUrls: ['./main.nav.component.scss'],
    providers: [TranslateService]
})
export class MainNavComponent {

  public readonly myName:string = "EDI";
  public readonly projects:string = "Projects";
  public readonly contact:string = "Contact";
  private translationService = inject(TranslateService);

  darkMode$ = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService){

  }

  onToggle(): void {
    this.darkModeService.toggle();
  }

  switchLanguage(event:Event):void
  {
    const language = (event.target as HTMLSelectElement).value;
    console.log(language);
    this.translationService.use(language); 
  }
}
