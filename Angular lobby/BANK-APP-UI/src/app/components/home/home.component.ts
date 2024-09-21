import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** Home component
   *  - Does not have any logic
   *  - Reason : Its purpos is to only display the home page.
   */
  constructor() { }

  ngOnInit(): void {
  }

}
