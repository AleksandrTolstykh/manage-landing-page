import { Component, OnInit, Input } from '@angular/core';

class Testimonial {
  image = "";
  name = "";
  text = "";

  constructor(image: string, name: string, text: string) {
    this.image = image;
    this.name = name;
    this.text = text;
  }
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() mobile = false;
  selectedItem = 0;
  nextItem = 1;
  lastItem = 2;
  testimonials: Testimonial[] = [
    new Testimonial(
      "assets/avatar-anisha.png",
      "Anisha Li",
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"),
    new Testimonial(
      "assets/avatar-ali.png",
      "Ali Bravo",
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"),
    new Testimonial(
      "assets/avatar-richard.png",
      "Richard Watts",
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"),
    new Testimonial(
      "assets/avatar-shanai.png",
      "Shanai Gough",
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”")
  ];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.selectedItem++;
      this.nextItem++;
      this.lastItem++;
      if (this.selectedItem > 3) {
        this.selectedItem = 0;
        this.nextItem = 1;
        this.lastItem = 2;
      }
      if (this.nextItem > 3) {
        this.nextItem = 0;
        this.lastItem = 1;
      }
      if (this.lastItem > 3) {
        this.lastItem = 0;
      }
    }, 5000);
  }

}
