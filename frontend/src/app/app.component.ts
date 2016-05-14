//angular dependencies
import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import '../../public/css/styles.css';

//components
import {LoginComponent} from './components/login/login.component';
import {SearchResultComponent} from "./components/searchresult/searchresult.component.ts";

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
    },{
        path:'/searchresult',
        name: 'Search Result',
        component: SearchResultComponent
    }
])
export class AppComponent {
}

