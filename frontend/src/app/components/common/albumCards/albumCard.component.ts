/**
 * Created by pratishshr on 5/14/16.
 */

import {Component, Input} from '@angular/core';
import {Spinner} from '../spinner/spinner';
import {Album} from '../../../models/AlbumModel';

@Component({
    selector: 'album-card',
    template: require('../../../views/common/albumCards/albumCard.html'),
    directives: [Spinner]
})
export class AlbumCardComponent{
    @Input()
    public isLoading: boolean;
    @Input()
    public albums: Album[];
}

