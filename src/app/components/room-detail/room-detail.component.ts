import { Component} from '@angular/core';
import { Room } from '../../interfaces/room.interface';
import { NgIf, NgFor } from '@angular/common';
import { RoomService } from '../../services/room.service';


@Component({
  selector: 'room-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  selectedRoom: Room | null = null;

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.selectedRoom$.subscribe(room => {
      this.selectedRoom = room;
      console.log(`In RoomDetailComponent, selectedRoom has been updated to: [${this.selectedRoom?.name}]`);
    });
  }
}
