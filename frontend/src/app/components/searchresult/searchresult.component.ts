import {Component} from '@angular/core'
import {HeaderComponent} from "../common/header/header.component";

import {AlbumService} from '../../services/album.service';

@Component({
    selector:'home',
    template:require('../../views/searchresult/searchresult.component.html'),
    directives:[HeaderComponent],
    providers: [AlbumService]
})
export class SearchResultComponent{

    constructor (private albumService: AlbumService) {}

    submitData(){
        event.preventDefault();
        this.albumService.listAll();
        // debugger;
        console.log("I am triggered")
    }    
}
