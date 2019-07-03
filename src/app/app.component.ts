import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng8-bootstrap4-fontawesome';
  model = {
    google: true,
    twitter: false,
    facebook: false
  };
}
