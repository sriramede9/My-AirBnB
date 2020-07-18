import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Place } from "./../../places/places.model";

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"],
})
export class CreateBookingComponent implements OnInit {
  @Input("selectedPlace") selectedPlace: Place;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  OnClose() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onClickBook() {
    console.log("Logic to book... show some alert and close");
    this.modalCtrl.dismiss({ message: "This is a dummy message!!" }, "confirm");
  }
}
