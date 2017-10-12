import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionComponent } from './selection/selection.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectComponent } from './main-content/project/project.component';
import { PageService } from './page-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectionComponent,
    MainContentComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
