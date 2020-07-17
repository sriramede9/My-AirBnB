import { Component, OnInit } from "@angular/core";
import { Place } from "./../../places.model";
import { ActivatedRoute } from "@angular/router";
import { PlacesService } from "./../../places.service";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit {
  editPlace: Place;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramsMap) => {
      this.editPlace = this.placeService.getPlace(paramsMap.get("placeId"));
    });
  }
}
