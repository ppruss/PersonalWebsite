import { Component, OnInit } from '@angular/core';
import { TimelineMax, Power1, Power2 } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var tl = new TimelineMax();
    tl.from('section', 2, {
      opacity: 0,
      scale: .5,
      ease: Power2.easeOut
    }, 0.2);

    tl.staggerFrom('h1, h2', 2, {
      opacity: 0,
      y: -40,
      ease: Power2.easeInOut
    }, 0.2, "-=2");

    tl.staggerFrom('.primaryButton', 2, {
      opacity: 0,
      x: -40,
      ease: Power2.easeInOut
    }, 0.2, "-=1");
  }
}
