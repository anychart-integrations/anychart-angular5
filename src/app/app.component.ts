import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css',
    '../../node_modules/anychart/dist/css/anychart-ui.min.css',
    '../../node_modules/anychart/dist/fonts/css/anychart-font.min.css'
  ]
})
export class AppComponent {
  title = 'app';
}
