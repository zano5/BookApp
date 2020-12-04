import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// import mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';

export interface MapboxOutput {
  attribution: string;
  features: Feature[];
  geometry: Geometry[];
  query: [];
}
export interface Feature {
  place_name: string;
  geometry: string;

}
export interface Geometry {
  coordinates: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapboxService {


  key = 'pk.eyJ1IjoiemFub3hvbG8iLCJhIjoiY2pqeWFzNGQ1MGt2MTNwbW1teDc2cHdsNCJ9.aiBqeGsFLobTfkMSdTx2mQ';

  constructor(private http: HttpClient) { }


  search_word(query: string) {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    // tslint:disable-next-line:max-line-length
    return this.http.get(url + query + '.json?types=address&country=ZA&access_token='  + this.key )
      .pipe(map((res: MapboxOutput) => {
        return res.features;
      }));
  }
}
