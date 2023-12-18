import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RestApiImmigrationService } from '../../service/rest-api-immigration.service';
import { Compte } from '../../model/compte.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentifier-usager',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './authentifier-usager.component.html',
  styleUrl: './authentifier-usager.component.css'
})
export class AuthentifierUsagerComponent {

  courriel: string = ""
  password: string = ""

  constructor(private restApi: RestApiImmigrationService, private router: ActivatedRoute, private redirect: Router) { }

  authentifierUsager() {
    console.log(this.courriel)
    console.log(this.password)
    this.restApi.verifierUsager(this.courriel, this.password).subscribe((res) => {
      console.log(res);
    })
  }
}
