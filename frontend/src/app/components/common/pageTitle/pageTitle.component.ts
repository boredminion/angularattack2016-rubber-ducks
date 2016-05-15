/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'page-title',
    template: require('../../../views/common/pageTitle/pageTitle.html'),
})
export class PageTitleComponent implements OnInit{
    title: string;

    ngOnInit() {
        let currentRoute = window.location.pathname.split('/')[1];
        this.title = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
    }
}

