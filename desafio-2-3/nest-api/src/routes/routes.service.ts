import { Injectable } from '@nestjs/common';
import { Route } from './entities/route.entity'

@Injectable()
export class RoutesService {
  private routes: Route[] = [
    {
      title: 'route 1',
      startPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
      endPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
    },
    {
      title: 'route 2',
      startPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
      endPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
    },
    {
      title: 'route 3',
      startPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
      endPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
    },
    {
      title: 'route 4',
      startPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
      endPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
    },
    {
      title: 'route 5',
      startPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
      endPosition: {
        lat: (Math.random() * 200) - 100,
        lng: (Math.random() * 200) - 100,
      },
    },
  ]
  findAll() {
    return this.routes;
  }
}
