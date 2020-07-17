import { Component, OnInit } from "@angular/core";
import { Place } from "./../../places.model";
import { ActivatedRoute, Router } from "@angular/router";
import { PlacesService } from "./../../places.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-offer-bookings",
  templateUrl: "./offer-bookings.page.html",
  styleUrls: ["./offer-bookings.page.scss"],
})
export class OfferBookingsPage implements OnInit {
  offerBookingPlace: Place;
  placeid: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.placeid = params.get("placeId");
      if (!params.has("placeId")) {
        this.navCtrl.navigateBack("/places/tabs/offers");
      }

      this.offerBookingPlace = this.placesService.getPlace(
        params.get("placeId")
      );
    });
    // console.log("place found is", this.offerBookingPlace);
  }

  onClickEditOffer() {
    this.router.navigate([
      "/",
      "places",
      "tabs",
      "offers",
      "edit",
      this.placeid,
    ]);
  }
}
