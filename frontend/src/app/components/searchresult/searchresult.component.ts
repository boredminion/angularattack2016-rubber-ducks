import {Component} from '@angular/core'
import {HeaderComponent} from "../header/header.component";

@Component({
    selector:'home',
    template:require('../../views/searchresult/searchresult.component.html'),
    directives:[HeaderComponent]
})
export class SearchResultComponent{
    
}