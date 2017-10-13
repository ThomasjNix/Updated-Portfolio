import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionComponent } from './selection/selection.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectComponent } from './main-content/project/project.component';
import { PageService } from './page-service.service';
import { AboutComponent } from './main-content/about/about.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { ProjectItemComponent } from './main-content/project/project-item/project-item.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'projects', component: ProjectComponent},
    {path: 'contact', component: ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SelectionComponent,
    MainContentComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    ProjectItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
