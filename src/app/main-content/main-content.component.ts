import { Component, OnInit } from '@angular/core';
import { PageService } from '../page-service.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: []
})
export class MainContentComponent implements OnInit {    
  /* For page loading purposes */    
  pageName: String;
  pageTemplate: String[];
  /* For time calculation */
  devTimePersonal: number;
  devTimeProfessional: number;
  oneYear : number = 1000*60*60*24*365.25;
  privStart: Date = new Date(2016, 2, 1);
  profStart: Date = new Date(2016, 5, 1);
  currentDate: Date = new Date();
    
    
  constructor(private _pageService: PageService) { 
  }

  ngOnInit() {
      this._pageService.pageChange$.subscribe(value => {
          this.pageName = value;
      });
      const now: Date = new Date();
      this.devTimePersonal = parseFloat(((this.currentDate.getTime() - this.privStart.getTime())/ this.oneYear).toFixed(2));
      this.devTimeProfessional = parseFloat(((this.currentDate.getTime() - this.profStart.getTime()) / this.oneYear).toFixed(2));
  }

}
