import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuOpen } from "../../../assets/menu-open/menu-open";
import { Mode } from "../../../assets/mode/mode";
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, SelectModule, ButtonModule, MenuOpen, Mode],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() collapsedSidenav = new EventEmitter<boolean>();
  collapsed = signal(false);
  i18n: any[] = [
    {name:'English'},
    {name:'Arabic'},
    { name: 'Chinese'}
  ];
  selectedLanguage: string = this.i18n[0];

  constructor() { }

  ngAfterViewInit() {
    this.toggleSidenav();
  }

  toggleSidenav() {
    this.collapsed.set(!this.collapsed());
    this.collapsedSidenav.emit(this.collapsed());
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element.classList.toggle('my-app-dark');
  }

}
