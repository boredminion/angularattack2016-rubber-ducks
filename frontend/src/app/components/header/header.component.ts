/**
 * Created by user on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {SearchService} from "../../services/instagram/SearchService";
import {Post} from "../../models/Post";

@Component({
    selector: 'my-header',
    template: require('../../views/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES]
})
export class HeaderComponent {

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
                resultPost.imageUrl = post['images']['low_resolution']['url']
                resultPost.likes = post['likes']['count'];
                resultPost.link = post['link'];
                resultPost.userName = post['user']['full_name'];
                this.resultPosts.push(resultPost);
            })
        }, (error)=> {
            console.log('error', error);
        });
    }
}