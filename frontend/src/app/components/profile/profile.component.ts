import {Component, OnInit} from '@angular/core';
import {User} from "../../models/UserModel";
import {UserService} from "../../services/instagram/UserService";
import {HeaderComponent} from "../common/header/header.component";


@Component({
    selector: 'my-profile',
    template: require('../../views/profile/profile.component.html'),
    directives: [HeaderComponent]
    /*styles: [require('../../../node_modules/ng2-material/components/card')]*/
})
export class ProfileComponent implements OnInit {
    user:User;
    errorMessage:string;

    constructor(private userService:UserService) {

    }

    ngOnInit() {
        if (window.localStorage.getItem('ducky_access_token')) {
            this.getUserInfo();
        }
        else {
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