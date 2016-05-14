import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "./../header/header.component.ts";
import {User} from "../../models/UserModel";
import {UserService} from "../../services/instagram/UserService";


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
        this.user = new User();
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
                    this.user.fullName = user['full_name'];
                    this.user.userName = user['username'];
                    this.user.bio = user['bio'];
                    this.user.profilePicture = user['profile_picture'];
                    this.user.website = user['website'];
                    this.user.followersCount = user['counts']['followed_by'];
                    this.user.followingCount = user['counts']['follows'];
                    this.user.mediaCount = user['counts']['media'];
                },
                (error) => {
                    this.errorMessage = <any>error
                }
            );
    }
}