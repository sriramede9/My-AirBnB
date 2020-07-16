import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Place } from "./../../places.model";
import { PlacesService } from "./../../places.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  loadPlaceById: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.loadPlaceById = this.placeService.getPlaceById(params["placeId"]);
      // console.log(this.loadPlaceById);
    });
  }
}
