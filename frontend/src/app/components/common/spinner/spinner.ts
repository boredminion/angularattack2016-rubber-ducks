/**
 * Created by pratishshr on 5/15/16.
 */

import {Component, Input} from '@angular/core';

@Component({
    selector: 'spinner',
    template: require('../../../views/common/spinner/spinner.html')
})
export class Spinner {
    @Input()
    public isLoading: boolean;
}

