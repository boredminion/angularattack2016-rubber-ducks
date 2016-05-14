/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, OnInit} from '@angular/core';

@Component({
    inputs: ['albums'],
    selector: 'album-card',
    template: require('../../../views/common/albumCards/albumCard.html'),
})
export class AlbumCardComponent{

}

