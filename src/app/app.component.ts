import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


 
  operand1: number = 0;
  operand2: number = 0;
  result: number = 0;

  ngOnInit(): void {
    
  }


  add(): void {
    this.result = this.operand1 + this.operand2;
  }

  subtract(): void {
    this.result = this.operand1 - this.operand2;
  }

  multiply(): void {
    this.result = this.operand1 * this.operand2;
  }

  divide(): void {
    if (this.operand2 === 0) {
      this.result = NaN; // Handle division by zero
    } else {
      this.result = this.operand1 / this.operand2;
    }
  }

}
