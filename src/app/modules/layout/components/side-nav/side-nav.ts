import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "../header/header";
import { CustomSidenav } from "../../custom-sidenav/custom-sidenav";

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, Header, CustomSidenav],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.scss'
})
export class SideNav implements AfterViewInit {
  @ViewChild('headerRef', { read: ElementRef }) headerRef!: ElementRef;
  @ViewChild('customSidenav') customSidenav!: CustomSidenav;
  isSidenavCollapsed = true;
  sidenavWidth = computed(() => {
    return this.isSidenavCollapsed ? '100px' : '250px';
  });
  sidenavHeight = 'calc(100vh - 0px)';

  ngAfterViewInit() {
    this.updateSidenavHeight();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateSidenavHeight();
  }

  private updateSidenavHeight() {
    if (this.headerRef?.nativeElement) {
      const headerHeight = this.headerRef.nativeElement.offsetHeight;
      this.sidenavHeight = `calc(100vh - ${headerHeight}px)`;
    }
  }

  toggleSidenav(event) {
    this.isSidenavCollapsed = event;
    this.customSidenav.isSidenavCollapsed = event;
    this.sidenavWidth = computed(() => {
      return this.isSidenavCollapsed ? '100px' : '250px';
    });
  }
}
