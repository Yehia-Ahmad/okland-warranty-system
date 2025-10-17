import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SideNav } from "../../../layout/components/side-nav/side-nav";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TableModule, SelectModule, ButtonModule, DialogModule, SideNav],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent {
  admins: any[] = [
    {
      username: 'Yousef Osama',
      email: 'youssef740osama@gmail.com',
      number: '01010101010',
      role: 'Admin',
    },
    {
      username: 'Yousef Osama',
      email: 'youssef740osama@gmail.com',
      number: '01010101010',
      role: 'Admin',
    },
    {
      username: 'Yousef Osama',
      email: 'youssef740osama@gmail.com',
      number: '01010101010',
      role: 'Admin',
    },
    {
      username: 'Yousef Osama',
      email: 'youssef740osama@gmail.com',
      number: '01010101010',
      role: 'Admin',
    },
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
}
