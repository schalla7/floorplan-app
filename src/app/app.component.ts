// app.component.ts
import { Component } from '@angular/core';
import { Room } from './interfaces/room.interface';
import { RoomService } from './services/room.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    NgFor,
  ]
})
export class AppComponent {
  selectedRoom: Room | null = null;

  constructor(private roomService: RoomService) {}

  onSvgLoad() {
    const svgElement = (document.getElementById('floorplan') as HTMLObjectElement).contentDocument;
    if (svgElement) {
      svgElement.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', () => {
          const room = this.roomService.getRoomById(path.id);
          if (room) {
            this.selectedRoom = room;
          }
        });
      });
    }
  }
}
