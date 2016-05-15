///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {JSONP_PROVIDERS} from "@angular/http/http";

@Component({
    selector: 'log-in',
    template: require('../../views/login/login.html'),
    providers: [JSONP_PROVIDERS]
})

export class LoginComponent implements OnInit {
    errorMessage:string;
    validUser:boolean = false;

    appUrl:string;
    instagramUrl:string;

    constructor(public router:Router) {
        this.appUrl = window.location.host;
        this.instagramUrl = `https://www.instagram.com/oauth/authorize/?client_id=e9b3606d89314de8ab297d5433fa6d2a&redirect_uri=http://${this.appUrl}/login/&response_type=token&scope=basic+public_content+likes`

    }

    ngOnInit() {
        if (window.localStorage.getItem('ducky_access_token')) {
            this.validUser = true;
            window.location.href = '/dashboard';
            //this.router.navigate(['Dashboard']);
        }
    }
}