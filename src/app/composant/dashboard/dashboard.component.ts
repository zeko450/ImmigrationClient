import { Component, OnInit } from '@angular/core';
import { RestApiImmigrationService } from '../../service/rest-api-immigration.service';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { request } from 'http';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  accountId: string = "";

  constructor(private restApi: RestApiImmigrationService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
  //Account Id of logged in user
    var id = this.router.snapshot.paramMap.get('id');
    
  }




}
