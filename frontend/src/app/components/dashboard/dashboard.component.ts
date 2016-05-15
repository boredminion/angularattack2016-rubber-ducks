/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';

import {PageTitleComponent} from '../common/pageTitle/pageTitle.component';
import {AlbumCardComponent} from '../common/albumCards/albumCard.component';

import {AlbumService} from '../../services/duckyAlbums/albumService';

import {Album} from '../../models/AlbumModel';

@Component({
    selector: 'dashboard',
    directives: [PageTitleComponent, AlbumCardComponent],
    providers: [AlbumService],
    template: require('../../views/dashboard/dashboard.html'),
})
export class DashboardComponent {
    albums:Album[] = [];
    errorMessage:string;
    isLoading:boolean;

    constructor(private albumService:AlbumService) {
    }

    ngOnInit() {
        if (window.localStorage.getItem('ducky_access_token')) {
            this.getAlbums();
        }
    }

    getAlbums() {
        this.isLoading = true;
        this.albumService.fetch()
            .subscribe(
                (albums) => {
                    albums.forEach((album) => {
                        var newAlbum = new Album(album);
                        this.albums.push(newAlbum);
                    });
                    this.isLoading = false;
                }
            )
    }

}