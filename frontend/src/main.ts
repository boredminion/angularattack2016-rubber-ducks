import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppComponent} from './app';
import 'rxjs/Rx';

//providers
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

if (process.env.ENV === 'production') {
    enableProdMode();
}
bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);

