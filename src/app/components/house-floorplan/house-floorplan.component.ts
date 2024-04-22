import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { House } from '../../interfaces/house.interface';
import { Room } from '../../interfaces/room.interface';
import { HouseService } from '../../services/house.service';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
  ],
  templateUrl: './house-floorplan.component.html',
  styleUrl: './house-floorplan.component.scss'
})
export class HouseFloorplanComponent implements OnInit, OnDestroy {
  
  @ViewChild('floorplanSvg', { static: false }) floorplanSvg!: ElementRef<HTMLObjectElement>;
  
  house: House;
  selectedRoom: Room | null = null;
  

  constructor(private houseService: HouseService) {
    this.house = this.houseService.getHouseData();
  }

  ngOnInit(): void {
      // TODO ?
  }

  handleRoomClick = (event: Event): void => {
    console.log("Well, you clicked SOMEWHERE.  Where though, is anybody's guess at this point");
    const path = event.target as Element;
    const room = this.house.rooms.find(room => room.name === path.id);
    this.selectedRoom = room ? room : null; // Ensures correct type assignment
  }

  ngAfterViewInit() {
    if (this.floorplanSvg && this.floorplanSvg.nativeElement) {
      this.floorplanSvg.nativeElement.addEventListener('load', () => {
        const svgDoc = this.floorplanSvg.nativeElement.contentDocument;
        const paths = svgDoc!.querySelectorAll('path');
        paths.forEach((path: Element) => {
          path.addEventListener('click', this.handleRoomClick);
        });
      });
    } else {
      console.error('SVG element not found!');
    }
  }

  
  
  ngOnDestroy(): void {
    if (this.floorplanSvg.nativeElement.contentDocument) {
      const paths = this.floorplanSvg.nativeElement.contentDocument.querySelectorAll('path');
      paths.forEach((path: Element) => {
        path.removeEventListener('click', this.handleRoomClick);
      });
    }
  }
}

