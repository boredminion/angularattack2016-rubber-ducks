///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';

//Services
import {UserService} from '../../services/instagram/UserService';
import {User} from "../../models/UserModel";

@Component({
    selector: 'log-in',
    template: require('../../views/login/login.html'),
})
export class LoginComponent implements OnInit{
    user: User;
    errorMessage: string;

    constructor (private userService: UserService) {}
    ngOnInit() {
        if(window.localStorage.getItem('ducky_access_token')) {
            this.getUserInfo();
        }
    }

    getUserInfo() {
        this.userService.getUserInfo()
            .subscribe(
                (user) => {this.user = user},
                (error) => {this.errorMessage = <any>error}
            );
    }


}