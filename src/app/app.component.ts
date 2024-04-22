// app.component.ts
import { ChangeDetectorRef, Component } from '@angular/core';
import { Room } from './interfaces/room.interface';
import { NgFor, NgIf } from '@angular/common';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { RoomService } from './services/room.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    NgFor,
    HouseDetailsComponent,
    RoomDetailComponent
  ]
})
export class AppComponent {
  public selectedRoom: Room | null = null;
  public selectedRoomName: string | null = null;

  constructor(
    private roomService: RoomService,
    private cdr: ChangeDetectorRef  // Inject ChangeDetectorRef
  ) { }
  
  onSvgLoad() {
    const svgElement = (document.getElementById('floorplan') as HTMLObjectElement).contentDocument;
    if (svgElement) {
      svgElement.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', () => {
          const room = this.roomService.getRoomById(path.id);
          // console.log(`In app component, in click listener in SVG, click found in room: [${room?.name}]`);
          if (room != null) {
            // this.selectedRoomName = room.name;
            this.selectedRoom = room;
            this.cdr.detectChanges();  // Manually trigger change detection
          }
        });
      });
    }
  }

  onRoomSelected(room: Room): void {
    this.selectedRoom = room;
    this.selectedRoomName = room.name;
    console.log(`In AppComponent, updated this.selectedRoomName to: [${this.selectedRoomName}]`);
  }
}
