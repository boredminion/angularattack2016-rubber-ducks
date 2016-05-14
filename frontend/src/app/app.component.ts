///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
//angular dependencies
import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import '../../public/css/styles.css';

//components
import {LoginComponent} from './components/login/login.component';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
])
export class AppComponent implements OnInit{
    constructor ( private  router: Router){}

    ngOnInit() {
        if(window.location.hash) {
            let hash = window.location.hash.split('=')[1];
            window.localStorage.setItem('ducky_access_token', hash);
        }
    }
}

