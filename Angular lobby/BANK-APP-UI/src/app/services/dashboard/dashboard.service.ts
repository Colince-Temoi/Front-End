import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from "../../constants/app.constants";
import { environment } from '../../../environments/environment';
import { User } from '../../model/user.model';
import { Contact } from '../../model/contact.model';

/** DashboardService
 *  We are invoking most of the backend services here!
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  /** withCredentials: true implies telling Angular
   * Please send any cookies or session id's or any tokens that you have to the backend server so that my spring security can understand whether the authentication is happened or not
   * For public apis we are not sending withCredentials: true because they don't need any authentication.
   * Along that you can see we are mentioning observe: 'response' meaning we are telling to the backend server that please send the entire response and not only the header or body
   */
  getAccountDetails(id: number){
    return this.http.get(environment.rooturl + AppConstants.ACCOUNT_API_URL + "?id="+id,{ observe: 'response',withCredentials: true });
  }

  getAccountTransactions(id: number){
    return this.http.get(environment.rooturl + AppConstants.BALANCE_API_URL+ "?id="+id,{ observe: 'response',withCredentials: true });
  }

  getLoansDetails(id: number){
    return this.http.get(environment.rooturl + AppConstants.LOANS_API_URL+ "?id="+id,{ observe: 'response',withCredentials: true });
  }

  getCardsDetails(id: number){
    return this.http.get(environment.rooturl + AppConstants.CARDS_API_URL+ "?id="+id,{ observe: 'response',withCredentials: true });
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
