import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from '../projects/projects.component';
import { ButtonsComponent } from '../buttons.component';
import { ExperienceComponent } from '../experience.component';
import { CardComponent } from '../cards/card.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
    selector: 'app-presentation',
    imports: [CommonModule, RouterModule, ButtonsComponent,CardComponent,ExperienceComponent,TranslatePipe],
    templateUrl: './presentation.component.html',
    styleUrls: ['./presentation.component.scss'],

})
export class PresentationComponent implements OnInit {
    private translate = inject(TranslateService);

    ngOnInit(): void {
        this.translate.setDefaultLang("english");
        this.translate.use("polish");
    }

}
