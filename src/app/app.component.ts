import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'manage-landing-page';
  mobile = false;

  ngOnInit(): void {
    this.mobile = (window.innerWidth <= 768) ? true : false;
  }

  onResize(event: any) {
    this.mobile = (event.target.innerWidth <= 768) ? true : false;
  }
}
