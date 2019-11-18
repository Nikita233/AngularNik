import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myproject';
  private apiUrl = 'https://api.mytimetable.live/rest/';
  data: any ={};
}
