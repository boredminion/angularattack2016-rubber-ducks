import {Component} from '@angular/core'
import {HeaderComponent} from "../common/header/header.component";

import {Album} from "../../models/AlbumModel"
import {AlbumCreateService} from '../../services/duckyAlbums/album-create-service';

@Component({
    selector: 'home',
    template: require('../../views/searchresult/searchresult.component.html'),
    directives: [HeaderComponent],
    providers: [AlbumCreateService]
})
export class SearchResultComponent {

    constructor(private albumCreateService:AlbumCreateService) {
    }

    public model:Album = {
        id: '2',
        name: "some name",
        description: "good description",
        user_id: '2',
        albumCover: "https://myfavouriteoldthings.files.wordpress.com/2013/10/sphinx-rubber-duck1.jpg",
        photos: []
    };

    submitData() {
        event.preventDefault();
        this.albumCreateService.addAlbum(this.model.name, this.model.description, this.model.user_id);
        // debugger;
        console.log("I am triggered")
    }
}
