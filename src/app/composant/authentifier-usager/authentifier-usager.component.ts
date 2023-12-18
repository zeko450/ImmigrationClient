import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RestApiImmigrationService } from '../../service/rest-api-immigration.service';
import { Compte } from '../../model/compte.model';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-authentifier-usager',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, DashboardComponent],
  templateUrl: './authentifier-usager.component.html',
  styleUrl: './authentifier-usager.component.css'
})
export class AuthentifierUsagerComponent {

  courriel: string = ""
  password: string = ""
  authentifier = false;
  accountId = ""



  constructor(private restApi: RestApiImmigrationService, private router: Router) { }


  authentifierUsager() {
    this.restApi.verifierUsager(this.courriel, this.password).subscribe((res) => {
      this.authentifier = res.isAuthenticated;
      if (this.authentifier) {
        this.accountId = res.account.account._id;
        this.router.navigate(['/dashboard', this.accountId]);
      }
    })
  }
}
