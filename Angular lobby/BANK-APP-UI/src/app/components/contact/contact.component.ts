import { Component, OnInit } from '@angular/core';
import { Contact } from "src/app/model/contact.model";
import { NgForm } from '@angular/forms';
import { getCookie } from 'typescript-cookie';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model = new Contact();
  contacts = new Array();

  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
      
  }

  /** As output from this behavior, we are receiving an Arrray of Contact objects
   * Next; we are fetching the very first element from this contacts array  and assigning it to this model object
   * With the forEach loop we are iterating over each and evry element available inside the contacts array and post that we are going to assign that contact element to the model object
   * And we are binding the model object to 'this' this class and that why we have to use 'bind(this)'
   * @param contactForm 
   */
  saveMessage(contactForm: NgForm) {
    this.dashboardService.saveMessage(this.model).subscribe(
      responseData => {
        this.contacts = <any> responseData.body;
        this.contacts.forEach(function (this: ContactComponent, contact: Contact) {
          this.model = contact;
        }.bind(this));
        // this.model = <any> responseData.body;
        contactForm.resetForm();
      });

  }

}
