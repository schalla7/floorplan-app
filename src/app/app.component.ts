import { ChangeDetectorRef, Component } from '@angular/core';
import { Room } from './interfaces/room.interface';
import { NgFor, NgIf } from '@angular/common';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';
import { RoomService } from './services/room.service';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { MatToolbarModule } from "@angular/material/toolbar"; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    NgFor,
    MatToolbarModule,
    HouseDetailsComponent,
    RoomDetailComponent
  ]
})
export class AppComponent {
  public selectedRoom: Room | null = null;
  public selectedRoomName: string | null = null;

  constructor(
    private roomService: RoomService,
    private cdr: ChangeDetectorRef,
  ) { }

  onSvgLoad() {
    const svgElement = (document.getElementById('floorplan') as HTMLObjectElement).contentDocument;
    if (svgElement) {
      const paths = svgElement.querySelectorAll('path');
      paths.forEach(path => {
        path.addEventListener('click', () => {
          const room = this.roomService.getRoomById(path.id);
          if (room != null) {
            this.selectedRoom = room;
            this.cdr.detectChanges(); // Manually trigger change detection

            // Reset styles for all paths
            svgElement.querySelectorAll('path').forEach(p => {
              p.style.stroke = '';
              p.style.strokeWidth = '';
            });
            // Apply styles directly to the clicked path
            path.style.stroke = "#ff0000";
            path.style.strokeWidth = "4px";
          }
        });
      });
    }
  }

}
