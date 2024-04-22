import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../interfaces/room.interface';

@Component({
  selector: 'floorplan',
  standalone: true,
  imports: [],
  templateUrl: './floorplan.component.html',
  styleUrl: './floorplan.component.scss'
})
export class FloorplanComponent {
  selectedRoom: Room | null = null;

  constructor(private roomService: RoomService) {}

  onSvgLoad() {
    const svgElement = (document.getElementById('floorplan') as HTMLObjectElement).contentDocument;
    if (svgElement) {
      svgElement.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', () => {
          const room = this.roomService.getRoomById(path.id);
          if (room) {
            this.roomService.setSelectedRoom(room);
          }
        });
      });
    }
  }
}
