import { Injectable } from "@angular/core";
import { Place } from "./places.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    new Place(
      "pone",
      "Toronto",
      "Hub for Industries",
      "https://cdn.pixabay.com/photo/2017/05/09/03/47/buildings-2297210_1280.jpg",
      400000
    ),
    new Place(
      "Ptwo",
      "Montreal",
      "French County",
      "https://cdn.pixabay.com/photo/2014/01/19/00/25/montreal-247795_1280.jpg",
      600000
    ),
    new Place(
      "Pthree",
      "Vancouver",
      "Fish and explore",
      "https://cdn.pixabay.com/photo/2015/05/05/17/56/vancouver-754204_1280.jpg",
      500000
    ),
  ];

  getPlaces() {
    return [...this.places];
  }

  getPlaceById(id: string) {
    return this.places.filter((p) => {
      return p.id === id;
    });
  }

  constructor() {}
}
