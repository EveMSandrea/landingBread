import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http= inject(HttpClient);
  private urlBase : string = 'https://fakestoreapi.com/products';

  getProduct():Observable<IProducts[]>{
    return this._http.get<IProducts[]>(this.urlBase);
  }
  getProductById(id:number):Observable<IProducts>{
    return this._http.get<IProducts>(`${this.urlBase}/${id}`);
  }
}
