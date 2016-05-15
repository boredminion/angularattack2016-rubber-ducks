/**
 * Created by user on 5/14/16.
 */

import {Component,AfterViewInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {Router} from '@angular/router-deprecated';
import {SearchService} from "../../../services/instagram/SearchService";
@Component({
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES]
})
export class HeaderComponent implements AfterViewInit{

    currentPage:string;

    constructor(public router:Router) {
    }

    ngAfterViewInit(){
        this.currentPage = window.location.pathname;
    }

    onSearch(value:any) {
        if (this.currentPage.split('/')[1] == "dashboard") {
            this.router.navigate(['Dashboard', {name: value['tagName']}]);
        } else if (this.currentPage.split('/')[2] == "images") {
            this.router.navigate(['SearchImages', {name: value['tagName']}]);
        }
    }

}