///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
//angular dependencies
import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import '../../public/css/styles.css';

//components
import {LoginComponent} from './components/login/login.component';
import {SearchTagsComponent} from './components/search/tags/searchTags.component';

//services
import {UserService} from './services/instagram/UserService';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, UserService]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    },
    {
        path: '/search/tags',
        name: 'SearchByTag',
        component: SearchTagsComponent
    }
])
export class AppComponent implements OnInit{
    constructor ( private  router: Router){}

    ngOnInit() {
        debugger;
        if(window.location.hash) {
            let hash = window.location.hash.split('=')[1];
            window.localStorage.setItem('ducky_access_token', hash);
        }
    }
}

