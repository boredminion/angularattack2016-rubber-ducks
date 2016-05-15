import {Component, OnInit} from '@angular/core';
import {User} from "../../models/UserModel";
import {UserService} from "../../services/instagram/UserService";
import {HeaderComponent} from "../common/header/header.component";
import {Album} from "../../models/AlbumModel";
import {DuckyUserService} from "../../services/duckyAlbums/duckyUser.service";
import {DuckyUser} from "../../models/DuckyUserModel";
import {AlbumCardComponent} from "../../components/common/albumCards/albumCard.component";

@Component({
    selector: 'my-profile',
    template: require('../../views/profile/profile.component.html'),
    directives: [HeaderComponent, AlbumCardComponent],
    providers: [UserService, DuckyUserService]
    /*styles: [require('../../../node_modules/ng2-material/components/card')]*/
})
export class ProfileComponent implements OnInit {
    user:User;
    duckyUser: DuckyUser;
    errorMessage:string;
    albums:Album[] = [];
    isLoading:boolean;

    constructor(private userService:UserService, private duckyUserService: DuckyUserService) {

    }

    ngOnInit() {
        this.getUserInfo();
        this.getUserAlbums();
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
    
    getUserAlbums() {
        this.isLoading = true;
        this.duckyUserService.fetchById('1')
            .subscribe(
                (user) => {
                    debugger;
                    user.albums.forEach((album) => {
                        debugger;
                        var newAlbum = new Album(album);
                        this.albums.push(newAlbum);
                        this.isLoading = false
                    });
                }
            )
    }
}