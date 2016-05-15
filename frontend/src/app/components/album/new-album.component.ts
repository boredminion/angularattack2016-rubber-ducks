import {Component} from '@angular/core'

import {Album} from "../../models/AlbumModel"
import {AlbumCreateService} from '../../services/duckyAlbums/album-create-service';

@Component({
    selector: 'new-album-form',
    template: require('../../views/album/new.html'),
    directives: [],
    providers: [AlbumCreateService]
})

export class NewAlbumComponent {

    constructor(private albumCreateService:AlbumCreateService) {
    }

    public errorMessage:string;
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
            error => this.errorMessage = <any>error
        );

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}