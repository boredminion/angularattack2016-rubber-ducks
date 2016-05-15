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

    public errorMessage: string;
    private submitted = false;
    public model:Album = {
        id: '',
        name: "some name",
        description: "good description",
        user_id: '1',
        albumCover: "",
        photos: [
            {url: "../../../../public/img/avatar.jpg"},
            {url: "../../../../public/img/avatar.jpg"}
        ]
    };

    onSubmit() {
        debugger;
        this.submitted = true;
        this.albumCreateService.addAlbum(this.model.name, this.model.description, this.model.user_id, this.model.albumCover, this.model.photos).subscribe(
            album => this.model = album,
            error =>  this.errorMessage = <any>error
        );

    }

    submitData() {
        // event.preventDefault();
        // debugger;
        // console.log("I am triggered")
        // console.log(this.model)
    }


    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
