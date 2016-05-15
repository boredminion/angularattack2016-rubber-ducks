///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by user on 5/14/16.
 */


import {Component,AfterViewInit,OnInit,Input} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {Router} from '@angular/router-deprecated';
import {SearchService} from "../../../services/instagram/SearchService";
import {User} from '../../../models/UserModel';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES,ROUTER_DIRECTIVES]
})
export class HeaderComponent implements AfterViewInit,OnInit{

    currentPage:string;
    showHeader:boolean;

    @Input()
    user:User;

    constructor(public router:Router) {
    }

    ngAfterViewInit(){
        this.currentPage = window.location.pathname;
    }

    ngOnInit() {
        if (localStorage.getItem('ducky_access_token')) {
            this.showHeader = true;
        } else {
            this.showHeader = false;
        }
    }

    onSearch(value:any) {
        if (this.currentPage.split('/')[1] == "dashboard") {
            this.router.navigate(['Dashboard', {name: value['tagName']}]);
        } else if (this.currentPage.split('/')[2] == "images") {
            this.router.navigate(['SearchImages', {name: value['tagName']}]);
        }
    }

}

