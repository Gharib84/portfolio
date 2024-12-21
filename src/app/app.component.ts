import { Component,OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger) 
  }
}
