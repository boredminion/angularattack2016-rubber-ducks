import{Component, OnInit} from '@angular/core'
import {HeaderComponent} from "../common/header/header.component";
import {RouteParams} from '@angular/router-deprecated';
import {SearchService} from "../../services/instagram/SearchService";
import {Post} from "../../models/Post";
import {Spinner} from "../common/spinner/spinner"
import {NewAlbumComponent} from "../album/new-album.component"


@Component({
    selector: 'search-image',
    template: require('../../views/image/searchimage.component.html'),
    directives: [HeaderComponent,Spinner, NewAlbumComponent],
    providers: [SearchService]
})
export class SearchImageComponent implements OnInit {

    searchName:string;
    resultPosts:Post[] = [];
    postCounts:number;
    isLoading:boolean;


    constructor(private searchService:SearchService, private routeParams:RouteParams) {
    }

    ngOnInit() {
        this.searchName = this.routeParams.get('name');
        if (this.searchName) {
            this.isLoading = true;
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
                this.isLoading=false;
            }, (error)=> {
                console.log('error', error);
            });
        }
    }


}
