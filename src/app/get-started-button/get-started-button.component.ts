import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-get-started-button',
  templateUrl: './get-started-button.component.html',
  styleUrls: ['./get-started-button.component.scss']
})
export class GetStartedButtonComponent implements OnInit {
  @Input() theme = "";

  constructor() { }

  ngOnInit(): void {
  }

}
