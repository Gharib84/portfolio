import { Component, ViewChild, OnInit, AfterViewInit,AfterViewChecked } from '@angular/core';
import { ExperienceComponent } from '../experience.component';
import { CommonModule } from '@angular/common';
import { Experience } from 'src/app/interfaces/experience';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ExperienceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild(ExperienceComponent, { static: false }) exp!: ExperienceComponent;
  experiences:Experience[] = [];

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    //this.getExperieces();
  }

  public ngAfterViewChecked(): void {
    if (this.exp && !this.experiences.length) {
      this.getExperieces();
    }
  }
  

  public getExperieces(): void {
    if(this.exp){
      this.experiences = this.exp.getDetails();
    } else
    {
      console.log('undefined');
    }
  }

}
