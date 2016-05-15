///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

//Services
import {UserService} from '../../services/instagram/UserService';
import {User} from "../../models/UserModel";
import {JSONP_PROVIDERS}  from '@angular/http';

@Component({
    selector: 'log-in',
    template: require('../../views/login/login.html'),
    providers: [JSONP_PROVIDERS]
})

export class LoginComponent implements OnInit {
    user:User;
    errorMessage:string;
    appUrl:string;
    instagramUrl:string;

    constructor(private userService:UserService, public router:Router) {
        this.appUrl = window.location.host;
        this.instagramUrl = `https://www.instagram.com/oauth/authorize/?client_id=e9b3606d89314de8ab297d5433fa6d2a&redirect_uri=http://${this.appUrl}/login/&response_type=token&scope=basic+public_content+likes`
    }

    ngOnInit() {
        if (window.localStorage.getItem('ducky_access_token')) {
            this.getUserInfo();
            this.router.navigate(['Dashboard']);
        }
    }

    getUserInfo() {
        this.userService.getUserInfo()
            .subscribe(
                (user) => {
                    this.user = new User(user);
                },
                (error) => {
                    this.errorMessage = <any>error
                }
            );
    }


}