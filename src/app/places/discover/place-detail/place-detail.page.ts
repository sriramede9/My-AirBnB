import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Place } from "./../../places.model";
import { PlacesService } from "./../../places.service";
import { NavController, ModalController } from "@ionic/angular";
import { CreateBookingComponent } from "./../../../bookings/create-booking/create-booking.component";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  loadPlaceById: Place;
  constructor(
    private activateRoute: ActivatedRoute,
    private placeService: PlacesService,
    private routes: Router,
    private navCtrl: NavController,
    private modelCtrl: ModalController
  ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      this.loadPlaceById = this.placeService.getPlace(params["placeId"]);
      // console.log(this.loadPlaceById.id);
    });
  }

  onClickBook() {
    // this.routes.navigate(["/", "places", "tabs", "discover"]);
    // this.navCtrl.navigateBack("/places/tabs/discover");
    this.modelCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.loadPlaceById },
      })
      .then((modelEl) => {
        modelEl.present();
        return modelEl.onDidDismiss();
      })
      .then((dismissData) => {
        if (dismissData.role === "confirm") {
          console.log("Confirmed!!");
        }
      });
  }
}
