import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CateoryService {
  private _baseUrl = environment.api_base_url

  constructor(private _http: HttpClient) { }

  getCategories() {
    return this._http.get(`${this._baseUrl}categories`);
  }

  getCategoryById(id: number) {
    return this._http.get(`${this._baseUrl}categories/${id}`);
  }

  createCategory(category: any) {
    return this._http.post(`${this._baseUrl}categories`, category);
  }

  getProducts(params?: any) {
    return this._http.get(`${this._baseUrl}products`, { params });
  }

  addNewProduct(product: FormData) {
    return this._http.post(`${this._baseUrl}products`, product);
  }

  getProductById(id: number) {
    return this._http.get(`${this._baseUrl}products/${id}`);
  }

  updateProduct(id: number, product: any) {
    return this._http.patch(`${this._baseUrl}products/${id}`, product);
  }

  deleteProduct(id: number) {
    return this._http.delete(`${this._baseUrl}products/${id}`);
  }
}
