import { ChangeDetectorRef, Component, Input, SimpleChanges} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'room-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.scss'
})
export class RoomDetailComponent {
  @Input() roomName: string | null = null;

  constructor(private cd: ChangeDetectorRef) {}


  ngOnChanges(changes: SimpleChanges) {
    if (changes['roomName']) {
      console.log(`In RoomDetailComponent, roomName has been updated to: [${this.roomName}]`);
      this.cd.detectChanges();
    }
  }
}
