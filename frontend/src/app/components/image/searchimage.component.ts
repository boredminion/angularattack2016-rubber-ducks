import{Component, OnInit} from '@angular/core'
import {HeaderComponent} from "../common/header/header.component";
import {RouteParams} from '@angular/router-deprecated';
import {AlbumService} from '../../services/album.service';
import {SearchService} from "../../services/instagram/SearchService";
import {Post} from "../../models/Post";


@Component({
    selector: 'home',
    template: require('../../views/image/searchimage.component.html'),
    directives: [HeaderComponent],
    providers: [AlbumService,SearchService]
})
export class SearchImageComponent implements OnInit {

    searchName:string;
    resultPosts:Post[] = [];
    postCounts:number;

    constructor(private albumService:AlbumService, private searchService:SearchService, private routeParams:RouteParams) {
    }

    ngOnInit() {
        this.searchName = this.routeParams.get('name');
        if (this.searchName) {
            this.searchService.getSearchResult(this.searchName).subscribe((posts)=> {
                posts.forEach((post)=> {
                    let resultPost = new Post();
                    resultPost.imageUrl = post['images']['low_resolution']['url'];
                    resultPost.likes = post['likes']['count'];
                    resultPost.link = post['link'];
                    resultPost.userName = post['user']['full_name'];
                    resultPost.profilePicture = post['user']['profile_picture'];
                    this.resultPosts.push(resultPost);
                });
                this.postCounts = this.resultPosts.length;
            }, (error)=> {
                console.log('error', error);
            });
        }
    }

    submitData() {
        event.preventDefault();
        this.albumService.listAll();
        // debugger;
        console.log("I am triggered")
    }


}
