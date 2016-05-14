///<reference path="../../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'log-in',
    template: require('../../views/login/login.html'),
    providers: [HTTP_PROVIDERS]
})
export class LoginComponent {

}