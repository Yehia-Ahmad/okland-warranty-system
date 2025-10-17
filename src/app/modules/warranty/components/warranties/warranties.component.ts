import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { SideNav } from '../../../layout/components/side-nav/side-nav';
import { WarnComponent } from "../../../assets/warn/warn.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { WarrantyService } from '../../services/warranty.service';

@Component({
  selector: 'app-warranties',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginatorModule, TableModule, SelectModule, ButtonModule, DialogModule, SideNav, WarnComponent],
  templateUrl: './warranties.component.html',
  styleUrl: './warranties.component.scss'
})
export class WarrantiesComponent {
  warranties: any[] = [];
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
  selectedWarranty: any;
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
  rows1: number = 0;


  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private _warrantyService: WarrantyService) {
    this.initializeChangeForm();
  }

  ngOnInit() {
    this.getAllWarranties();
  }

  getAllWarranties() {
    this._warrantyService.getAllWarranties().subscribe({
      next: (res: any) => {
        this.warranties = res.data;
      }
    });
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

  showDialog(mode: string, warranty: any) {
    this.selectedWarranty = warranty;
    this.mode = mode;
    this.visible = true;
  }

  showDeleteDialog(warranty: any) {
    this.selectedWarranty = warranty;
    this.deleteVisible = true;
  }

  deleteWarranty() {
    this._warrantyService.deleteWarranty(this.selectedWarranty.id).subscribe({
      next: (res: any) => {
        this.getAllWarranties();
        this.deleteVisible = false;
      }
    });
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
