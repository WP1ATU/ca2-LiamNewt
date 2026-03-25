import { Injectable,signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Cars } from "./cars.interface";
 
@Injectable({
    providedIn: 'root',
 })

 export class ItemApiService {
    private _http=inject(HttpClient);

    public items = signal<Cars[]>([]);

    private _apiUrl = "http://localhost:5050/cars";

    // return all cars from database
  getItems() {
    const url = this._apiUrl;
    this._http.get<Cars[]>(url)
      .subscribe(data => {
          this.items.set(data);
      });
  }

  // add one car
  addItem(myMake: string, myModel: string, myYear: string, myImage:string) {
      const url = this._apiUrl;
      let car={make:myMake, model:myModel, year:myYear, image:myImage}
      this._http.post<Cars[]>(url, car)
      .subscribe(data => {  
          this.getItems();
      });
  }

  // delete car by id
  deleteItem(myId:string) {
    const url = this._apiUrl + '/' + myId;
    this._http.delete(url)
    .subscribe(data => { 
      this.getItems();
    });
  }
 }