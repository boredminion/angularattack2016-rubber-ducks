import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";


@Component({
    selector:'my-profile',
    template:require('../views/profile.component.html'),
    directives:[HeaderComponent]
    /*styles: [require('../../../node_modules/ng2-material/components/card')]*/
})
export class ProfileComponent{
    
}