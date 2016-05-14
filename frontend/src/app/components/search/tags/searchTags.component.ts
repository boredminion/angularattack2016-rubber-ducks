/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'search-tags',
    template: require('../../../views/search/searchTag.html'),
    providers: [HTTP_PROVIDERS]
})
export class SearchTagsComponent {
    
}