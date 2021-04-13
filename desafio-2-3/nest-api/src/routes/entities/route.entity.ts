export class Route {
  title: string;
  startPosition: InterfacePosition;
  endPosition: InterfacePosition;
}

export interface InterfacePosition {
  lat: number;
  lng: number;
}