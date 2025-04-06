import { Component, inject, OnInit, AfterViewInit, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from 'src/app/services/projects.service';
import { ButtonsComponent } from '../buttons.component';
import { TranslatePipe } from '@ngx-translate/core';
import { FadeInDirective } from '../contact/directives/fade-in.directive';
import { ThreeService } from 'src/app/services/three.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslatePipe, FadeInDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectCard') projectCards!: QueryList<ElementRef>;


  constructor(private projectService: ProjectsService) { }


  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Card entrance animation
    gsap.from(this.projectCards.toArray().map(card => card.nativeElement), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: ".projects-section",
        start: "top 80%"
      }
    });
  }

  hoverCard(card: HTMLDivElement) {
    gsap.to(card, {
      y: -10,
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 255, 255, 0.3)",
      duration: 0.3,
    });
    const cardGlare = card.querySelector('.card-glare');
    if (cardGlare) {
      gsap.to(cardGlare, {
        opacity: 1,
        duration: 0.3,
      });
    }
  }
  
  resetCard(card: HTMLDivElement) {
    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
      yoyo: true,
    });
    const cardGlare = card.querySelector('.card-glare');
    if (cardGlare) {
      gsap.to(cardGlare, {
        opacity: 0,
        duration: 0.3,
      });
    }
  }

 myProjects() {
    return this.projectService.projects();
  }

  ngOnInit(): void { }
}
