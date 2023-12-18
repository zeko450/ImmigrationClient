import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiImmigrationService {

  URL : string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  //Authentifier Usager
  verifierUsager(courriel:string, password:string): Observable<any> {
    return this.http.post<any>(this.URL + "accounts/verify", { courriel, password }).pipe(
      catchError((error: any) => {
        console.error(error);
        var err = throwError(() => new Error('Could not authentify user'))
        // Handle the error as needed, e.g., show an alert
        alert("Mot de passe ou courriel incorrect");
        // Return an observable with a default value or rethrow the error
        return err ;
      })
    )
  }
}
