import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { SideNav } from '../../../layout/components/side-nav/side-nav';
import { WarnComponent } from "../../../assets/warn/warn.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-warranties',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginatorModule, TableModule, SelectModule, ButtonModule, DialogModule, SideNav, WarnComponent],
  templateUrl: './warranties.component.html',
  styleUrl: './warranties.component.scss'
})
export class WarrantiesComponent {
  warranties: any[] = [
    {
      product: "Q11",
      model: "H4",
      username: "Yousef Osama",
      number: "01010101010",
      invoice: "img/qr.png",
      remaining: "365 days",
      expiry: "0/0/2026"
    },
    {
      product: "Z3",
      model: "9005",
      username: "Yousef Osama",
      number: "01010101010",
      invoice: "img/qr.png",
      remaining: "365 days",
      expiry: "0/0/2026"
    },
    {
      product: "Android HD",
      model: "MTK 9INCH 2-32",
      username: "Yousef Osama",
      number: "01010101010",
      invoice: "img/qr.png",
      remaining: "365 days",
      expiry: "0/0/2026"
    },
    {
      product: "Matrix 1",
      model: "H7",
      username: "Yousef Osama",
      number: "01010101010",
      invoice: "img/qr.png",
      remaining: "365 days",
      expiry: "0/0/2026"
    }
  ];
  visible: boolean = false;
  deleteVisible: boolean = false;
  mode: string = 'add';
  changeForm: FormGroup;
  roles: any[] = [
    {
      name: 'Admin'
    },
    {
      name: 'Customer'
    }
  ];
  pages = [1, 2, 3, 4, '...', 10];
  currentPage = 1;
  by_date: any;
  by_dateOptions: any[] = [
    {
      name: 'By Date'
    },
    {
      name: 'By Month'
    },
    {
      name: 'By Year'
    }
  ];
  first1: number = 0;
  rows1: number = 5;


  constructor(private fb: FormBuilder) {
    this.initializeChangeForm();
  }

  initializeChangeForm() {
    this.changeForm = this.fb.group({
      username: [null],
      email: [null],
      phone_number: [null],
      password: [null],
      role: [null],
    });
  }

  showDialog(mode: string) {
    this.mode = mode;
    this.visible = true;
  }

  showDeleteDialog() {
    this.deleteVisible = true;
  }

  closeDialog() {
    this.deleteVisible = false;
  }

  goToPage(page: number | string) {
    if (typeof page === 'number') {
      this.currentPage = page;
    }
  }

  onPageChange1(event: PaginatorState) {
    this.first1 = event.first ?? 0;
    this.rows1 = event.rows ?? 10;
  }
}
