import {Component, Input} from '@angular/core'
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster/angular2-toaster';

import {Album} from "../../models/AlbumModel"
import {AlbumCreateService} from '../../services/duckyAlbums/album-create-service';

@Component({
    selector: 'new-album-form',
    template: require('../../views/album/new.html'),
    directives: [ToasterContainerComponent],
    providers: [AlbumCreateService, ToasterService]
})

export class NewAlbumComponent {

    @Input() selectedImages:any;

    private toasterService: ToasterService;

    constructor(private albumCreateService:AlbumCreateService, toasterService: ToasterService) {
        this.toasterService = toasterService;
    }

    public errorMessage:string;
    private submitted = false;
    public model:Album = {
        id: '',
        name: '',
        description: '',
        user_id: '1',
        albumCover: '',
        photos: this.selectedImages,
        tags: ''
    };

    onSubmit() {
        this.submitted = true;
        this.albumCreateService.addAlbum(this.model.name, this.model.description, this.model.user_id, this.model.albumCover, this.selectedImages, this.model.tags).subscribe(
            album => this.model = {
                id: '',
                name: '',
                description: '',
                user_id: '1',
                albumCover: '',
                photos: this.selectedImages,
                tags: ''
            },
            error => this.errorMessage = <any>error
        );
        this.toasterService.pop('success', 'Success!', 'Album Created Successfully');
        var selectedGuys = document.getElementsByClassName('selected-image-holder');
        var guysLength = selectedGuys.length;
        for (var i = 1; i <= guysLength; i++) {
            if(selectedGuys[0]){
                selectedGuys[0].className = "card"
            }
        }
        this.selectedImages = [];
    }

    // TODO: Remove this when we're done
    // get diagnostic() {
    //     return JSON.stringify(this.model);
    // }
}