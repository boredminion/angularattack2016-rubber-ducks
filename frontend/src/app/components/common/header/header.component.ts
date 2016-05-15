/**
 * Created by user on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {FORM_DIRECTIVES} from "@angular/common/src/forms/directives";
import {SearchService} from "../../../services/instagram/SearchService";
import {Post} from "../../../models/Post";
import {SearchTagsComponent} from '../../search/tags/searchTags.component'

@Component({
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
    providers: [HTTP_PROVIDERS, SearchService],
    directives: [FORM_DIRECTIVES, SearchTagsComponent]
})
export class HeaderComponent {
    
}