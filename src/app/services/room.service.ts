// room.service.ts
import { Injectable } from '@angular/core';
import { Room } from '../interfaces/room.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private rooms: Room[] = [
    {
      id: 'livingroom',
      name: 'Living Room',
      description: 'Spacious area with natural lighting and view of the lawns and the pond.',
      photos: [
        'assets/rooms/livingroom/livingroom_1.jpg',
        'assets/rooms/livingroom/livingroom_2.jpg',
        'assets/rooms/livingroom/livingroom_3.jpg',
        'assets/rooms/livingroom/livingroom_4.jpg'
      ],
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      description: 'With generous BIC, opening up on the patio with lovely outside views.',
      photos: [
        'assets/rooms/bedroom/bedroom_1.jpg',
        'assets/rooms/bedroom/bedroom_2.jpg',
        'assets/rooms/bedroom/bedroom_3.jpg',
      ],
    },
    {
      id: 'patio',
      name: 'Patio',
      description: 'First floor patio with view lawns, pond, and beyond.',
      photos: [
        'assets/rooms/patio/patio_1.jpg',
        'assets/rooms/patio/patio_2.jpg',
      ],
    },
    {
      id: 'bathroom',
      name: 'Bathroom',
      description: "Yep.  It's a bathroom allright!",
      photos: [
        'assets/rooms/bathroom/bathroom_1.jpg',
        'assets/rooms/bathroom/bathroom_2.jpg',
      ],
    },
    {
      id: 'hallway',
      name: 'Hallway / Entry',
      description: 'Welcoming hallway entrance, with place to hang your coat and stash your boots',
      photos: [
        'assets/rooms/hallway/hallway_1.jpg',
      ],
    },
    {
      id: 'kitchen',
      name: 'Kitchen / Entry',
      description: 'Modern kitchen adjacent to living room.',
      photos: [
        'assets/rooms/kitchen/kitchen_1.jpg',
        'assets/rooms/kitchen/kitchen_2.jpg',
        'assets/rooms/kitchen/kitchen_bic.jpg',
      ],
    },
  ];

  getRoomById(id: string): Room | null {
    const room = this.rooms.find(room => room.id === id);
    // console.log("\nClicked on room:");
    // console.log(room);
    return room ?? null;
  }
  
  
}
