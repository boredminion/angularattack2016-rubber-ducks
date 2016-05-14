/**
 * Created by pratishshr on 5/14/16.
 */

import {Component} from '@angular/core';

import {User} from '../../../models/UserModel';
@Component({
    inputs: ['user'],
    selector: 'my-header',
    template: require('../../../views/common/header/header.html'),
})
export class HeaderComponent {

}