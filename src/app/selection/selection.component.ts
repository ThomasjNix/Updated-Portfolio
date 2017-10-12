import { Component, OnInit } from '@angular/core';
import { PageService } from '../page-service.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
  providers: []
})
export class SelectionComponent implements OnInit {

  constructor(private _pageService:PageService) { }

  ngOnInit() {
  }
    
  changePage(changeTo: string){
      this._pageService.changePage(changeTo);
  }
}
