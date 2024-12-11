import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm-addition',
  templateUrl: './mm-addition.component.html',
  styleUrls: ['./mm-addition.component.css']
})
export class MmAdditionComponent implements OnInit {

    progressValue: number = 20;
    constructor () {}
    
    ngOnInit(): void {}

    increaseProgress(): void {
        if (this.progressValue < 100) {
          this.progressValue += 20; 
        }
      }
    
      // Method to decrease progress
    decreaseProgress(): void {
        if (this.progressValue > 0) {
          this.progressValue -= 20; 
        }    
    }
}