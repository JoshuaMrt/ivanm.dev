import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit(): void {
    // You can still register plugins if needed
    gsap.registerPlugin();
  }

  ngAfterViewInit(): void {
    // Delay GSAP animations until after Angular has fully initialized the view
    setTimeout(() => {
      gsap.from('.card-header', {
        delay: 0.5,
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15
      });

      gsap.from('.card-header a, .card-header button', {
        delay: 0.5,
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.15
      });
    }, 0); // Use a small delay to ensure Angular has updated the DOM
  }
}
