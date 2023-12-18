import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte.model';

@Injectable({
  providedIn: 'root'
})
export class RestApiImmigrationService {

  URL : string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  //Authentifier Usager
  verifierUsager(courriel:string, password:string): Observable<any> {
    return this.http.post<any>(this.URL + "accounts/verify", { courriel, password })
  }
}
