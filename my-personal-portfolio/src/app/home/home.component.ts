import { AfterViewInit, Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  email: string = 'ivanm.dev25@gmail.com';
  buttonText: string = 'Copy Email';
  isCopying: boolean = false;
constructor () {

}
  ngOnInit(): void {
    gsap.registerPlugin(); // Register GSAP plugins if needed

    // Example animation in ngOnInit
    gsap.from('.body-page', {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }

  ngAfterViewInit(): void {
    // Additional animations in ngAfterViewInit if necessary
    gsap.from('.body-page img, .body-page me-image, .body-page div', {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }
  copyEmail() {
    this.isCopying = true;
    navigator.clipboard.writeText(this.email)
      .then(() => {
        console.log('Email copied to clipboard');
        this.buttonText = 'Copied!';
        setTimeout(() => {
          this.buttonText = 'Copy Email';
          this.isCopying = false;
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  }

}
