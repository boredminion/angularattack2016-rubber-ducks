import { Component } from '@angular/core';
import '../../public/css/styles.css';
import {Test} from "./components/test.component";
@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [Test]
})
export class AppComponent { }

