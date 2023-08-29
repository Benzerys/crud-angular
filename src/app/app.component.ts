import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'crud-angular';
  state: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  slideBarActive() {
    this.state = !this.state;
  }
}
