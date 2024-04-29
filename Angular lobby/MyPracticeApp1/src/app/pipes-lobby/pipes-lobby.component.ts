import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-pipes-lobby',
  templateUrl: './pipes-lobby.component.html',
  styleUrl: './pipes-lobby.component.css'
})
export class PipesLobbyComponent {
  today: number = Date.now();

  user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890"
};

months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

stringData$!: Observable<string>;

/*ngOnInit implementation here creates an observable stringData$ using of('Delayed string data') and then applies the delay operator to simulate a 2-second delay before emitting the string data.
In the ngOnInit() lifecycle hook, we create an observable stringData$ using of('Delayed string data'), which emits the string 'Delayed string data'.
We then use the delay operator to delay the emission of the string data by 2 seconds.
In the component's template, we use the async pipe to subscribe to stringData$ and display the emitted string data when it becomes available after the delay.
*/
ngOnInit(): void {
  this.stringData$ = of('Delayed string data').pipe(
    delay(2000) // Simulating a 2-second delay
  );
}
}
