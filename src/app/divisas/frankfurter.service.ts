import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrankfurterService {
  private url = "https://api.frankfurter.app/latest";

  constructor(private http: HttpClient) {
  }

  public obtenerCotizaciones$() {
    return this.http.get(this.url);
  }
}
