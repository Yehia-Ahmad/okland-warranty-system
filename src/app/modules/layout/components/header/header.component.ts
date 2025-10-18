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
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() collapsedSidenav = new EventEmitter<boolean>();
  collapsed = signal(false);
  i18n: any[] = [
    {
      name:'English',
      code:'en'
    },
    {
      name:'Arabic',
      code:'ar'
    },
    {
      name: 'Chinese',
      code: 'zh'
    }
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
