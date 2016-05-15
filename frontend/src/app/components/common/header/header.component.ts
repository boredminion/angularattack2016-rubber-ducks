///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by user on 5/14/16.
 */


import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
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
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit,AfterViewInit {

    currentPage:string;
    showHeader:boolean = false;

    @Input()
    user:User;

    constructor(public router:Router) {
    }

    ngOnInit() {
        if (localStorage.getItem('ducky_access_token')) {
            this.showHeader = true;
        }
    }

    ngAfterViewInit() {
        if (window.location.pathname.split('/')[1] == 'search') {
            this.changeActiveBar('search-tag');
        } else if (window.location.pathname.split('/')[1] == 'dashboard') {
            this.changeActiveBar('dashboard');
        }
    }

    changeActiveBar(elementId:string) {
        if (elementId == 'search-tag') {
            document.getElementById(elementId).className = 'active';
            document.getElementById('dashboard').className = '';
        } else {
            document.getElementById(elementId).className = 'active';
            document.getElementById('search-tag').className = '';
        }
    }

    onSearch(value:any) {
        this.currentPage = window.location.pathname;
        if (this.currentPage.split('/')[2] == "images") {
            this.router.navigate(['SearchImages', {name: value['tagName']}]);
        }
        else if (this.currentPage.split('/')[1]) {
            this.router.navigate(['Dashboard', {name: value['tagName']}]);
        }
    }

}

