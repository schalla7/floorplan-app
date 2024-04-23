import { ChangeDetectorRef, Component, Input, SimpleChanges} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Room } from '../../interfaces/room.interface';


@Component({
  selector: 'room-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  @Input() room?: Room | null;

}
