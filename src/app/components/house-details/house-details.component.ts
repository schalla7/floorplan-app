import { Component } from '@angular/core';
import { House } from '../../interfaces/house.interface';

@Component({
  selector: 'house-details',
  standalone: true,
  imports: [],
  templateUrl: './house-details.component.html',
  styleUrl: './house-details.component.scss'
})
export class HouseDetailsComponent {
  houseDetails: House = {
    title: '',
    description: '',
    price: '',
    address: '',
    thumbnail: '',
  };
}
