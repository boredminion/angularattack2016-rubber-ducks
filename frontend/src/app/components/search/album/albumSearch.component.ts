import {Component,OnInit} from '@angular/core';
import { AlbumSearchService} from "../../../services/duckyAlbums/albumSearch.service";
import {Album} from "../../../models/AlbumModel";
import {RouteParams} from '@angular/router-deprecated';
import {stringify} from "querystring";


@Component({
    selector:'search-tags',
    template:require('../../views/dashboard/dashboard.html'),
    providers:[AlbumSearchService]
})
export class AlbumSearch implements OnInit{
    tagName : string;
    albums: Album[] = [];
    constructor(private albumSearchService:AlbumSearchService,private routeParams:RouteParams){}

    ngOnInit() {
        let tagName = this.routeParams.get("name");
        if(tagName!=null) {
            this.getAlbumSearchResult(tagName);
        }
    }
    
    getAlbumSearchResult(tagName:string){
        this.albumSearchService.getAlbumSearchResults(tagName).subscribe(
            (albums) => {
                albums.forEach((album) => {
                    var newAlbum = new Album(album);
                    this.albums.push(newAlbum);
                } )}
        );
    }
}