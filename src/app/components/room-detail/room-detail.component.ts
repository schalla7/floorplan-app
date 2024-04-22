import { Component, Input } from '@angular/core';
import { Room } from '../../interfaces/room.interface';
import { NgIf, NgFor } from '@angular/common';
import { HouseService } from '../../services/house.service';


@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  @Input() room: Room = {} as Room;

  get photos(): string[] {
    if (!this.room) {
      return [];
    }
    return this.houseService.getPhotosForRoom(this.room.name);
  }

  constructor(private houseService: HouseService) { }
}
