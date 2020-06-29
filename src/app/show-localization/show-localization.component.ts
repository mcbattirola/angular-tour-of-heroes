import { Component, OnInit } from '@angular/core';
import { Plugins, GeolocationPosition } from "@capacitor/core";
import { bindCallback, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const { Geolocation } = Plugins;

@Component({
  selector: 'app-show-localization',
  templateUrl: './show-localization.component.html',
  styleUrls: ['./show-localization.component.css']
})
export class ShowLocalizationComponent implements OnInit {

  position: GeolocationPosition;

  constructor() { }

  async ngOnInit(): Promise<void> {
    this.position = await Geolocation.getCurrentPosition();
    console.log(this.position);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

}
