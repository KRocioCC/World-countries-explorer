import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Country {
  private readonly API_URL = 'https://api.restcountries.com/countries/v5';
  private readonly token = 'rrc_live_2d60da3147e442daab60bd551c535bb9';

  private http = inject(HttpClient);

  // Mtodo para buscar pases por capital
  searchByCapital(query: string) {
    query = query.toLowerCase().trim();

    return this.http.get<RESTCountry>(

      `${this.API_URL}/capitals/${query}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
  }
}
