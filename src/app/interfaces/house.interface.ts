import { Room } from "./room.interface";


export interface House {
  title: string;
  description: string;
  price: string;
  address: string;
  thumbnail: string;
  floorPlan: string; // URL to the SVG floorplan
  rooms: Room[];
}
