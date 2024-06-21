import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor (private snackBar: MatSnackBar) {
    
  }

  ngOnInit(): void {
    // Initialize GSAP plugins if needed
    gsap.registerPlugin();

    // Example GSAP animation in ngOnInit
    gsap.from('.body-home', {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }

  ngAfterViewInit(): void {
    // Additional GSAP animations in ngAfterViewInit if necessary
    gsap.from('.body-home p', {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // duration in milliseconds
    });
  }
}
