import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {
  baseUrl = environment.api_base_url;

  constructor(private _http: HttpClient) { }

  getAllWarranties() {
    return this._http.get(`${this.baseUrl}warranties`);
  }

  getWarrantyById(id: number) {
    return this._http.get(`${this.baseUrl}warranties/${id}`);
  }

  deleteWarranty(id: number) {
    return this._http.delete(`${this.baseUrl}warranties/${id}`);
  }

  activateWarranty(warranty: FormData) {
    return this._http.post(`${this.baseUrl}warranties`, warranty);
  }
}
