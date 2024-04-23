// house.service.ts
import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { Room } from '../interfaces/room.interface';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HouseService {
  
  /*
    export interface House {
      title: string;
      description: string;
      price: string;
      address: string;
      thumbnail: string;
      floorPlan: string; // URL to the SVG floorplan
      rooms: Room[];
    }

    export interface Room {
      name: string;
      description: string;
      photos: string[]; // URLs to the images
    }

  */

  private house: House = {
    title: "Quaint 1-Bedroom Apartment With View",
    description: "Nice, spacious one-bedroom apartment with patio overlooking the Somewhere Dam and Somewhere Park",
    price: "$ 1000.00",
    address: "27 Somewhere Street, Leiden, Netherlands",
    thumbnail: "assets/estate_arrival.jpg",
  };

  constructor() { }

  getHouseData(): House {
    return this.house;
  }

}

