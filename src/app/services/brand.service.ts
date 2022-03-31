import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url="http://localhost:4500/api/admin/brand";
  
  constructor(public http:HttpClient) { }
  addbrand(data:any){
    console.log(data)
  //console.log(this.http.post(`${this.url}`,data))
  return this.http.post(`${this.url}`,data)
  }
}
