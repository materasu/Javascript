import { Injectable } from '@angular/core';
// import { HttpClient } from ;
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private _http: HttpClient) { }
  getItems() {
    let url = `http://localhost:8081/api/v1/items`
    return this._http.get(url)

  }
  getReviews(id) {
    let url = `http://localhost:8081/api/v1/${id}/reviews`
    return this._http.get(url)
  }
  postReview(id,review) {
    let url = `http://localhost:8081/api/v1/${id}/reviews`
    this._http.post(url,review)
  }
}
