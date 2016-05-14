///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
//angular dependencies
import {Component, OnInit} from '@angular/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ProfileComponent} from './components/profile.component';
import '../../public/css/styles.css';


//components
import {LoginComponent} from './components/login/login.component';
import {SearchTagsComponent} from './components/search/tags/searchTags.component';
import { JSONP_PROVIDERS }  from '@angular/http';
//services
import {UserService} from './services/instagram/UserService';
import {SearchResultComponent} from './components/searchresult/searchresult.component.ts';
import {HeaderComponent} from './components/header/header.component';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],

    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,JSONP_PROVIDERS, UserService]
})
@RouteConfig([
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
        useAsDefault: true
    }, {
        path: '/searchresult',
        name: 'Search Result',
        component: SearchResultComponent
    },
    {

        path: '/profile',
        name: 'Profile',
        component: ProfileComponent,
    },
    {
        path: '/search/tags',
        name: 'SearchByTag',
        component: SearchTagsComponent

    },
    {
        path: '/header',
        name: 'Header',
        component: HeaderComponent
    }
])
export class AppComponent implements OnInit {
    constructor(private  router:Router) {
    }

    ngOnInit() {
        if (window.location.hash) {
            let hash = window.location.hash.split('=')[1];
            window.localStorage.setItem('ducky_access_token', hash);
        }
    }
}

