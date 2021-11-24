import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface responseProduct {
  idproduct: number;
  nameproduct: string;
  idcategory: number;
}

@Injectable()
export class ProductService {

  BASE_API: string = environment.base_api

  constructor(
    private http: HttpClient
  ) { }


  getProductAll(): Observable<responseProduct> {
    const token = localStorage.getItem('token')
    const header = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    })

    return this.http.get<responseProduct>(`${this.BASE_API}/product/`, { headers: header })
  }

  createProduct(payload: any) {
    const token = localStorage.getItem('token')
    const header = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    })

    return this.http.post(`${this.BASE_API}/product/`, payload, { headers: header } )
  }

  updateProduct(payload: any) {
    const token = localStorage.getItem('token')
    const header = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    })

    return this.http.post(`${this.BASE_API}/product/`, payload, { headers: header } )
  }

  deleteProduct(id: number) {
    const token = localStorage.getItem('token')
    const header = new HttpHeaders({
      'Authorization' : 'Bearer ' + token
    })

    return this.http.delete(`${this.BASE_API}/product/${id}`, { headers: header })

  }
}
