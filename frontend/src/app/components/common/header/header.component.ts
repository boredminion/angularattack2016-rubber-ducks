/**
 * Created by user on 5/14/16.
 */

import {Component, AfterViewInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {Router} from '@angular/router-deprecated';
import {SearchService} from "../../../services/instagram/SearchService";
import {SearchTagsComponent} from '../../search/tags/searchTags.component'

@Component({
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES]
})
export class HeaderComponent {


    currentPage:string;

    constructor(public router:Router) {
    }

    onSearch(value:any) {
        this.currentPage = window.location.pathname;

        if (this.currentPage == '/dashboard') {
            this.router.navigate(['Dashboard']);
        } else if (this.currentPage.split('/')[1] == "search") {
            this.router.navigate(['SearchImages', {name: value['tagName']}]);
        }
    }

}