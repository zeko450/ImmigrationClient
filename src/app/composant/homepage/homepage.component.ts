import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthentifierUsagerComponent } from '../authentifier-usager/authentifier-usager.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextboxComponent } from './textbox/textbox.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, BannerComponent,
    FooterComponent, NavbarComponent, TextboxComponent, AuthentifierUsagerComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
