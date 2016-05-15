import {Component, OnInit} from '@angular/core';
import {RouteParams} from "@angular/router-deprecated";
import {AlbumSearchService} from "../../services/duckyAlbums/albumSearch.service";
import {Spinner} from "../common/spinner/spinner";
import {HeaderComponent} from "../common/header/header.component";
import {Test} from "../../models/SelectedAlbum";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: 'album-detail',
    directives: [Spinner, HeaderComponent,ROUTER_DIRECTIVES],
    providers: [AlbumSearchService],
    template: require('../../views/albumDetail/detail.component.html')
})
export class AlbumDetailComponent implements OnInit {

    selectedAlbum:Test = new Test();
    isLoading:boolean;

    constructor(private routeParams:RouteParams, private albumSearchService:AlbumSearchService) {
    }

    ngOnInit() {
        let albumId = this.routeParams.get('id');
        if (albumId != null) {
            this.getAlbumDetail(albumId);
        }
    }

    getAlbumDetail(albumId:string) {
        this.isLoading = true;
        this.albumSearchService.getAlbumDetail(albumId).subscribe((album)=> {
                this.selectedAlbum.id = album.id;
                this.selectedAlbum.name = album.name;
                this.selectedAlbum.description = album.description;
                this.selectedAlbum.user_id = album.user_id;
                this.selectedAlbum.albumCover = album['photos'][0] && album['photos'][0]['url'];
                this.selectedAlbum.photos = album['photos'];
                this.selectedAlbum.tags = album['tags'];
                this.isLoading = false;
            }, (error)=> {
                console.log('error', error);
            }
        );
    }

}