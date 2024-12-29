import { Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked, inject } from '@angular/core';
import { ExperienceComponent } from '../experience.component';
import { CommonModule } from '@angular/common';
import { Experience } from 'src/app/interfaces/experience';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCheck, faPersonRunning } from '@fortawesome/free-solid-svg-icons';
import { FadeInDirective } from '../contact/directives/fade-in.directive';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-card',
  imports: [CommonModule, FontAwesomeModule, FadeInDirective,TranslatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(ExperienceComponent, { static: false }) exp!: ExperienceComponent;
  experiences: Experience[] = [];
  faBriefcase = faBriefcase;
  faCalendar = faCalendar;
  faCheck = faCheck;
  faPersonRunning = faPersonRunning;
  public works: Experience[] = [
    {
      company: "INTRO.WORK.EKO_OKNA.COMPANY",
      type: "Hybrid",
      title: "INTRO.WORK.EKO_OKNA.TITLE.JOB",
      start: "INTRO.WORK.EKO_OKNA.PERIOD.START",
      end:   "INTRO.WORK.EKO_OKNA.PERIOD.END",
      tasks: []
    },
    {
      platform: "INTRO.WORK.FREELANCER.platform",
      type: "Remote",
      title: "INTRO.WORK.FREELANCER.TITLE.JOB",
      start: "INTRO.WORK.FREELANCER.PERIOD.START",
      tasks: []
    }
  ]
  private translate = inject(TranslateService);
  currentLanguage: string = 'polish'; // Default language
  translations: any = {};
  public ngOnInit(): void {
    this.translate.get('INTRO.WORK').subscribe((data) => {
      this.translations = data; // Store all translations under 'INTRO.WORK'
    });
  }

  getTranslatedTasks(work: Experience): string[] {
    const key = this.getCompanyKey(work); // Determine company key
    let tasks: string[] = [];
    
    this.translate.get(`INTRO.WORK.${key}.TASKS`).subscribe((translatedTasks: string[]) => {
      tasks = translatedTasks;
    });
  
    return tasks;
  }
  

  public ngAfterViewInit(): void {
  }

  public ngAfterViewChecked(): void {
    if (this.exp && !this.experiences.length) {
      this.getExperieces();
    }
  }


  public getExperieces(): void {
    if (this.exp) {
      this.experiences = this.exp.getDetails();
    } else {
      console.log('undefined');
    }
  }

  // Helper method to get company/platform translation key
  protected getCompanyKey(work: Experience): string {
    return work.company ? 'EKO_OKNA' : 'FREELANCER';
  }

  translateDate(key: any): string {
    if (!this.translations || !this.translations.INTRO || !this.translations.INTRO.WORK) {
      return key; // Return the key if translations are not yet loaded or structure is incorrect
    }
    const keys = key.split('.');
    let translation = this.translations.INTRO.WORK;

    for (const k of keys) {
      if (translation && translation.hasOwnProperty(k)) {
        translation = translation[k];
      } else {
        return key;
      }
    }

    return translation as string;
  }
}
