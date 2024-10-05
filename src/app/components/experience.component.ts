import { Component, OnInit } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  public generateExperience: Experience[] = [
    {
      company: "Eko Okna S.A",
      type:"Hybrid",
      title:   "Junior FullStack Engineer",
      start:    "Mar 2023",
      end:      "Nov 2024",
      tasks: [
        "Collaborated with cross-functional teams to design, develop and maintain System ERP, ensuring responsive user-friendly interfaces and efficient backend systems.",
        "Worked with technologies such as HTML, CSS, JavaScript to create dynamic, responsive user interfaces.",
        "Developed and optimized server-side logic using Symfony, PHP to enhance performance and scalability.",
        "Integrated databases like MySQL, PostgreSQL, MongoDB and ensured seamless communication between the front end and back end.",
        "Utilized RESTful APIs and third-party libraries for enhanced functionality and to integrate external services.",
        "Participated in code reviews and collaborated with senior developers to follow best practices in software development.",
        "Used version control systems (e.g., Git) to manage and document development workflows.",
        "Assisted in debugging and resolving issues across the stack, both on the client and server sides",
        "Worked in an Agile environment, contributing to sprints and actively participating in daily stand-ups,retrospectives, and sprint planning."
      ]
    },
    {
      platform: "Freelancer",
      type:"Remote",
      title: "Software Engineer",
      start: "Nov 2024",
      tasks: [
        "A full-stack progressive web application for booking travel trips online", "designed and developed from scratch using modern technologies."," This app allows users to browse book and manage travel trips effortlessly.",
        "Built with: Angular (18+), NestJS, TypeORM, MySQL, Swagger, Material Design, Spartan UI.",
        "Front-End: Implemented a responsive and intuitive user interface using Angular, Material Design, and Spartan UI, ensuring a smooth and consistent UX across devices.",
        "Back-End: Developed a RESTful API using NestJS and TypeORM with MySQL for data persistence. Ensured scalability and maintainability of the backend architecture.",
        "Utilized RESTful APIs and third-party libraries for enhanced functionality and to integrate external services.",
        "Back-End: Developed a RESTful API using NestJS and TypeORM with MySQL for data persistence. Ensured scalability and maintainability of the backend architecture.",
        "API Documentation: Designed and documented the entire API from scratch using Swagger for better developer collaboration and ease of integration.",
        "Progressive Web App (PWA): Enabled offline capabilities and push notifications, providing a native-like experience for users.",
        "Challenges Overcome: Optimized performance for large data sets and managed complex booking workflows."
      ]
    }
  ]
  public ngOnInit(): void {
      this.getDetails();
  }

  public getDetails():Experience[]
  {
     return this.generateExperience;
  }
}
