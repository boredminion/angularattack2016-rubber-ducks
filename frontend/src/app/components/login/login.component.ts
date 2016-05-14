///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';

//Services
import {UserService} from '../../services/instagram/UserService';
import {User} from "../../models/UserModel";
import { JSONP_PROVIDERS }  from '@angular/http';

@Component({
    selector: 'log-in',
    template: require('../../views/login/login.html'),
    providers: [JSONP_PROVIDERS]
})
export class LoginComponent implements OnInit{
    user: string;
    errorMessage: string;

    constructor (private userService: UserService) {}
    ngOnInit() {
        this.user = 'Pratish';
        if(window.localStorage.getItem('ducky_access_token')) {
            this.getUserInfo();
        }
    }

    getUserInfo() {
        console.log(this.user);
        this.userService.getUserInfo()
            .subscribe(
                (user) => {this.user = user.full_name},
                (error) => {this.errorMessage = <any>error}
            );
    }


}