/**
 * Created by user on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'my-header',
    template: require('../../views/header/header.html'),
    providers: [HTTP_PROVIDERS]
})
export class HeaderComponent {

}