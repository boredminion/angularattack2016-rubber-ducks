///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';

import {User, } from '../../../models/UserModel';
@Component({
    inputs: ['user'],
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
})
export class HeaderComponent implements OnInit{
    showHeader: boolean;
    
    ngOnInit() {
        if(localStorage.getItem('ducky_access_token')) {
            this.showHeader = true;
        } else {
            this.showHeader = false;
        } 
    }

}