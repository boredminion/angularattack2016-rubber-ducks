import {Component} from '@angular/core';
import '../../public/css/styles.css';
import {Home} from "./components/home.component";
@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [Home]
})
export class AppComponent {
}

