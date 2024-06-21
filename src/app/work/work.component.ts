import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import gsap from 'gsap';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, AfterViewInit {


  constructor (private snackBar: MatSnackBar) {
    
  }
  ngOnInit(): void {
    gsap.registerPlugin(); // Register GSAP plugins if needed

    // Example animation in ngOnInit
    gsap.from('.body-work', {
      delay: 0.5,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15
    });
  }

  ngAfterViewInit(): void {
    // Additional animations in ngAfterViewInit if necessary
    gsap.from('.body-work p', {
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
