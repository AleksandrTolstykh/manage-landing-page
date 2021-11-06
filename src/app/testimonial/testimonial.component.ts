import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  @Input() image = "";
  @Input() name = "";
  @Input() text = "";

  constructor() { }

  ngOnInit(): void {
  }

}
