import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EnglishComponent } from './components/english/english.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EnglishComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
