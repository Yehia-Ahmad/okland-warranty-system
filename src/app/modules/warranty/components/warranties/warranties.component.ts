import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { SideNavComponent } from '../../../layout/components/side-nav/side-nav.component';
import { WarnComponent } from "../../../assets/warn/warn.component";
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { WarrantyService } from '../../services/warranty.service';
import { FluidModule } from 'primeng/fluid';
import { DatePickerModule } from 'primeng/datepicker';
import { format } from 'date-fns';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-warranties',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginatorModule, TableModule, SelectModule, ButtonModule, DialogModule, SideNavComponent, WarnComponent, DatePickerModule, FluidModule],
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
  search: string;
  date: Date | string | undefined ;
  searchSubject = new Subject<string>();
  first1: number = 0;
  rows1: number = 0;


  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private _warrantyService: WarrantyService) {
    this.initializeChangeForm();
  }

  ngOnInit() {
    this.getAllWarranties();

    this.searchSubject
      .pipe(
        debounceTime(500), // wait 500ms after user stops typing
        distinctUntilChanged()
      )
      .subscribe(value => {
        this.search = value;
        this.getAllWarranties(); // trigger search
      });
  }

  getAllWarranties() {
    this.date && (this.date = format(this.date, 'yyyy-MM-dd'));
    let params = {
      page: this.currentPage,
      search: this.search,
      date: this.date
    }
    this._warrantyService.getAllWarranties(params).subscribe({
      next: (res: any) => {
        this.warranties = res.data;
      }
    });
  }

  onSearchChange(value: string) {
    this.searchSubject.next(value);
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
