import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable()

export class PageService{
    pageChange$: Subject<String> = new BehaviorSubject("About Me");
    
    constructor(){
    }
    
    public changePage(changeTo: String){
        this.pageChange$.next(changeTo);
    }
}
