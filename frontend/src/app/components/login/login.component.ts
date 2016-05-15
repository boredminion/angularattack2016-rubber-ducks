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

    constructor(public router:Router) {
    }

    ngOnInit() {
        if (window.localStorage.getItem('ducky_access_token')) {
            this.validUser = true;
            window.location.href = '/dashboard';
            //this.router.navigate(['Dashboard']);
        }
    }
}