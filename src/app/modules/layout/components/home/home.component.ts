import { Component } from '@angular/core';
import { SideNav } from "../side-nav/side-nav";
import { CommonModule } from '@angular/common';
import { InvoiceCard } from '../../../assets/invoice-card/invoice-card';

@Component({
  selector: 'app-home',
  imports: [CommonModule, InvoiceCard, SideNav],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
