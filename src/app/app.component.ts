// app.component.ts
import { Component } from '@angular/core';
import { Room } from './interfaces/room.interface';
import { RoomService } from './services/room.service';
import { NgFor, NgIf } from '@angular/common';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { FloorplanComponent } from './components/floorplan/floorplan.component';
import { RoomDetailComponent } from './components/room-detail/room-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    NgIf,
    NgFor,
    HouseDetailsComponent,
    FloorplanComponent,
    RoomDetailComponent
  ]
})
export class AppComponent {
  
}
