export class BaseClass {
  id:number
  name :string
}



export class Country extends BaseClass{

}
export class City extends BaseClass {
  CountryId:number
  Country:Country;
}

export class State extends BaseClass{
  CityId:number
  City:City;
}
