import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from "../../constants/app.constants";
import { environment } from '../../../environments/environment';
import { Contact } from '../../model/contact.model';

/** Inside this class, we are going to invoke all the backend REST APIs. As of now we made changes inside the resource server where all the Rest apis are going to accept the email request parameter but not the customer id.
 * That's why when I am trying to invoke all my secured APIs I am passing the ?email as a request parameter. And to this request parameter I am trying to assign the ="+email value that we fetched from the User object.
 * If you go to any of the components where these functions are getting invoked, you will find the logic to fetch the email from the User object. For example, account.component.ts.
 *  - There, whenever we are trying to invoke the function, getAccountDetails, we are trying to pass the email as input from the user object.
 *  - This user object is being fetched from the session storage with the key userdetails.
 *  - So the same kind of changes I have done inside all the component classes like, account.component.ts, balance.component.ts, cards.component.ts, loans.component.ts, etc.
 * So, these are all the important changes that I have done, and I hope you are clear now
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAccountDetails(email: String){
    return this.http.get(environment.rooturl + AppConstants.ACCOUNT_API_URL + "?email="+email,{ observe: 'response',withCredentials: true });
  }

  getAccountTransactions(email: String){
    return this.http.get(environment.rooturl + AppConstants.BALANCE_API_URL+ "?email="+email,{ observe: 'response',withCredentials: true });
  }

  getLoansDetails(email: String){
    return this.http.get(environment.rooturl + AppConstants.LOANS_API_URL+ "?email="+email,{ observe: 'response',withCredentials: true });
  }

  getCardsDetails(email: String){
    return this.http.get(environment.rooturl + AppConstants.CARDS_API_URL+ "?email="+email,{ observe: 'response',withCredentials: true });
  }

  getNoticeDetails(){
    return this.http.get(environment.rooturl + AppConstants.NOTICES_API_URL,{ observe: 'response' });
  }

  saveMessage(contact : Contact){
    var contacts = [];
    contacts.push(contact);
    return this.http.post(environment.rooturl + AppConstants.CONTACT_API_URL,contacts,{ observe: 'response'});
  }

}
