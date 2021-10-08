import { Country, State } from './../models/country';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { City } from '../models/country';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelperService {


  changeAddress(e: any, type?: string) {
    console.log(e.value)
    console.log(e)
    switch (type) {
      case 'Country':
        break;
      case 'City':
        break;
      default:
        break;
    }

  }

  constructor(private http: HttpClient) { }
  ApiURL: string = "http://localhost:3000/";

  getCountries() {
    return this.http.get<Country[]>(this.ApiURL + "Countries").
      pipe(
        map((res: Country[]) => {
          return res
        }));
  }
  getCities(CountryId?: number) {
    console.log(CountryId);
    return this.http.get<any[]>(this.ApiURL + "Cities").
      pipe(
        map((res: City[]) => {
          console.log(res);
          return res.filter(item => {
            return item.CountryId == CountryId;
          })
        }));
  }
  getRegions(CityId:number) {
    return this.http.get<State[]>(this.ApiURL + "Regions").
      pipe(map(
        (res: State[]) => {
          return res.filter(item => {
            return item.CityId == CityId;
          }) }));
  }

}
