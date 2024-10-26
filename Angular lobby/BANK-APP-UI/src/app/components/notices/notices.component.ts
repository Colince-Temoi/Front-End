import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/model/cards.model';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  notices = new Array();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    /* Invoking the getNoticeDetails details available inside the dashboardService.
    And since it is going to invoke a REST API in the backend, I am going to subscribe that.
    When I get a response the same I am setting/storing inside the notices array which I have defined inside this NoticesComponent
    This notices array reference, if you check inside the template, I am utilizing it there.
     */
    this.dashboardService.getNoticeDetails().subscribe(
      responseData => {
      this.notices = <any> responseData.body;
      });
  }

}
