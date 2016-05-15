/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Post} from "../../../models/Post";
import {SearchService} from "../../../services/instagram/SearchService";

@Component({
    selector: 'search-tags',
    template: require('../../../views/search/searchTag.html'),
    providers: [HTTP_PROVIDERS, SearchService]
})
export class SearchTagsComponent{

    resultPosts:Post[] = [];

    constructor(private searchService:SearchService) {
    }

    onSubmit(value:any) {
        this.getResult(value['searchParam']);
    }

    getResult(tagName:string) {
        this.searchService.getSearchResult(tagName).subscribe((posts)=> {
            posts.forEach((post)=> {
                let resultPost = new Post();
                resultPost.imageUrl = post['images']['low_resolution']['url'];
                resultPost.likes = post['likes']['count'];
                resultPost.link = post['link'];
                resultPost.userName = post['user']['full_name'];
                this.resultPosts.push(resultPost);
                console.log(this.resultPosts);
            })
        }, (error)=> {
            console.log('error', error);
        });
    }

}