import { Component, OnInit } from '@angular/core';
import { House } from '../../interfaces/house.interface';

@Component({
  selector: 'house-details',
  standalone: true,
  imports: [],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.scss'
})
export class HouseDetailsComponent {
  public house: House = {
    title: "Selling my Dutch Dream House!",
    description: "Nice, spacious one-bedroom apartment with patio overlooking the Somewhere Dam and Somewhere Park",
    price: "$ 1000.00",
    address: "27 Somewhere Street, Leiden, Netherlands",
    thumbnail: "assets/rooms/patio/patio_2.jpg",
  };
  
}
