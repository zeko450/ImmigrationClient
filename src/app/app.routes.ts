import { Routes } from '@angular/router';
import { AuthentifierUsagerComponent } from './composant/authentifier-usager/authentifier-usager.component';
import { HomepageComponent } from './composant/homepage/homepage.component';


export const routes: Routes = [
    { path: 'accueil', component: HomepageComponent},
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path:'authentifierUsager', component: AuthentifierUsagerComponent}
];
