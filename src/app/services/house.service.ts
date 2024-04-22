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

  // Initial state of house is hardcoded/static:
  private house: House = {
    title: "Selling my Dutch Dream House!",
    description: "Nice, spacious one-bedroom apartment with patio overlooking the Somewhere Dam and Somewhere Park",
    price: "$ 1000.00",
    address: "27 Somewhere Street, Leiden, Netherlands",
    thumbnail: "assets/estate_arrival.jpg",
    rooms: []
  };

  constructor(private http: HttpClient) { }

  getHouseData(): House {
    return this.house;
  }

  getFloorPlan(): Observable<string> {
    // Use HttpClient to get the SVG content as a string
    return this.http.get('assets/floorplan1.svg', { responseType: 'text' });
  }

  getRoomDetails(roomName: string): Room | null {
    const room = this.house.rooms.find(room => room.name === roomName);
    return room ?? null;  // Use the nullish coalescing operator to return null instead of undefined, or else I get type error
  }

   getPhotosForRoom(roomName: string): string[] {
    return this.photosByRoom[roomName] || [];
  }

  private photosByRoom: { [key: string]: string[] } = {
    livingroom: [
      'assets/rooms/livingroom/livingroom_1.jpg',
      'assets/rooms/livingroom/livingroom_2.jpg',
      'assets/rooms/livingroom/livingroom_3.jpg',
      'assets/rooms/livingroom/livingroom_4.jpg',
    ],
    
    bathroom: [
      'assets/rooms/bathroom/bathroom_1.jpg',
      'assets/rooms/bathroom/bathroom_2.jpg',
    ],

    kitchen: [
      'assets/rooms/kitchen/kitchen_1.jpg',
      'assets/rooms/kitchen/kitchen_2.jpg',
      'assets/rooms/kitchen/kitchen_bic.jpg',
    ],

    hallway: [
      'assets/rooms/hallway/hallway_1.jpg',
    ],

    patio: [
      'assets/rooms/patio/patio_1.jpg',
      'assets/rooms/patio/patio_2.jpg',
    ],

    bedroom: [
      'assets/rooms/bedroom/bedroom_1.jpg',
      'assets/rooms/bedroom/bedroom_2.jpg',
      'assets/rooms/bedroom/bedroom_3.jpg',
    ]
    
  };
}

