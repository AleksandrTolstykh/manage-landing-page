import { Component, OnInit } from '@angular/core';

class Feature {
  number = "";
  header = "";
  content = "";

  constructor(number: string, header: string, content: string) {
    this.number = number;
    this.header = header;
    this.content = content;
  }
}

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  features: Feature[] = [
    new Feature(
      "01",
      "Track company-wide progress",
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."),
    new Feature(
      "02",
      "Advanced built-in reports",
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."),
    new Feature(
      "03",
      "Everything you need in one place",
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
