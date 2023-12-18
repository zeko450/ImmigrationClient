import { Routes } from '@angular/router';
import { AuthentifierUsagerComponent } from './composant/authentifier-usager/authentifier-usager.component';
import { HomepageComponent } from './composant/homepage/homepage.component';
import { DashboardComponent } from './composant/dashboard/dashboard.component';
import { InscrireUsagerComponent } from './composant/inscrire-usager/inscrire-usager.component';


export const routes: Routes = [
    { path: 'accueil', component: HomepageComponent },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: 'authentifierUsager', component: AuthentifierUsagerComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'inscription' , component: InscrireUsagerComponent}

];
