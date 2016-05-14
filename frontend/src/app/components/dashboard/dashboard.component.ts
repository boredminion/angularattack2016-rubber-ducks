/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';

import {HeaderComponent} from '../common/header/header.component';
import {PageTitleComponent} from '../common/pageTitle/pageTitle.component';
import {AlbumCardComponent} from '../common/albumCards/albumCard.component';

import {UserService} from '../../services/instagram/UserService';
import {AlbumService} from '../../services/duckyAlbums/albumService';

import {User} from '../../models/UserModel';
import {Album} from '../../models/AlbumModel';

@Component({
    selector: 'dashboard',
    directives: [HeaderComponent, PageTitleComponent, AlbumCardComponent],
    providers: [AlbumService],
    template: require('../../views/dashboard/dashboard.html'),
})
export class DashboardComponent {
    user: User;
    albums: Album[] = [];
    errorMessage: string;

    constructor (private userService: UserService, private albumService: AlbumService) {}

    ngOnInit() {
        if(window.localStorage.getItem('ducky_access_token')) {
            this.getUserInfo();
            this.getAlbums();
        }
    }

    getUserInfo() {
        this.userService.getUserInfo()
            .subscribe(
                (user) => {this.user = new User(user);},
                (error) => {this.errorMessage = <any>error}
            );
    }

    getAlbums() {
        this.albumService.fetch()
            .subscribe(
                (albums) => {
                    albums.forEach((album) => {
                    var newAlbum = new Album(album);
                    this.albums.push(newAlbum);
                } )}
            )
    }

}