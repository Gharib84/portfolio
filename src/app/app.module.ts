import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnglishComponent } from './components/english/english.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TranslateModule, TranslatePipe,TranslateLoader } from '@ngx-translate/core';
import translateMetaData from './shared/translate.metaData';
import { PresentationComponent } from './components/presentation/presentation.component';
import { provideHttpClient } from '@angular/common/http';
import { ExperienceComponent } from './components/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { CardComponent } from './components/cards/card.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExperienceComponent,
    PresentationComponent,
    ContactComponent,
    AppRoutingModule,
    EnglishComponent,
    BrowserAnimationsModule,
    TranslatePipe,
    TranslateModule.forRoot(translateMetaData),
    CardComponent
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
