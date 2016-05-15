///<reference path="../../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by user on 5/14/16.
 */

import {Component, OnInit, Input} from '@angular/core';

import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {SearchService} from "../../../services/instagram/SearchService";
import {SearchTagsComponent} from '../../search/tags/searchTags.component';
import {User} from '../../../models/UserModel';

@Component({
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES, SearchTagsComponent]
})
export class HeaderComponent implements OnInit {
    showHeader:boolean;

    @Input()
    user:User;

    ngOnInit() {
        if (localStorage.getItem('ducky_access_token')) {
            this.showHeader = true;
        } else {
            this.showHeader = false;
        }
    }

}
