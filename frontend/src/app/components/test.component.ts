import {Component} from '@angular/core';
import { DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector:'hello',
    template:`<h2>My code works</h2>
                <div style="display:inline-block; min-height:290px;">
    <datepicker [(ngModel)]="date" showWeeks="true"></datepicker>
  </div>
  <button type="button" class="btn btn-primary btn-sm">Send</button>
                `,
    directives: [DATEPICKER_DIRECTIVES]
})
export class Test{
    
}