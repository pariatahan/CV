import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName='Hilton Hotel';
  hideRooms =false;
  numberOfRooms = 10;

  toggle(){
    this.hideRooms = !this.hideRooms;
}



}
