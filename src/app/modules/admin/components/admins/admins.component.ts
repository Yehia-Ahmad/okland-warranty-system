import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { SideNavComponent } from "../../../layout/components/side-nav/side-nav.component";
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { AdminsService } from '../../services/admins.service';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TableModule, SelectModule, ButtonModule, DialogModule, SideNavComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss'
})
export class AdminsComponent {
  admins: any[] = [];
  selectedUser: any;
  visible: boolean = false;
  deleteVisible: boolean = false;
  mode: string = 'add';
  changeForm: FormGroup;
  roles: any[] = [
    {
      name: 'Admin',
      value: 'admin'
    },
    {
      name: 'Customer',
      value: 'customer'
    }
  ];
  pages = [1, 2, 3, 4, '...', 10];
  currentPage = 1;

  constructor(private fb: FormBuilder, private _adminsService: AdminsService, private cdr: ChangeDetectorRef) {
    this.initializeChangeForm();
  }

  ngOnInit() {
    setTimeout(() => {
      this.getAllUsers();
    }, 100);
  }

  getAllUsers(params?: any) {
    this._adminsService.getAllUsers(params).subscribe({
      next: (res: any) => {
        this.admins = res.data.users;
        this.cdr.detectChanges();
      }
    });
  }

  initializeChangeForm() {
    this.changeForm = this.fb.group({
      username: [null],
      email: [null],
      phone: [null],
      password: [null],
      role: [null],
    });
  }

  userHandler() {
    if (this.mode === 'add') {
      this.addUser();
    } else {
      this.updateUser();
    }
  }

  addUser() {
    this.changeForm.value.role = this.changeForm.value.role.toLowerCase();
    this._adminsService.createUser(this.changeForm.value).subscribe({
      next: (res: any) => {
        this.getAllUsers();
        this.visible = false;
      }
    })
  }

  updateUser() {
    this.changeForm.value.role = this.changeForm.value.role.toLowerCase();
    this._adminsService.updateUser(this.selectedUser._id, this.changeForm.value).subscribe({
      next: (res: any) => {
        this.getAllUsers();
        this.visible = false;
        this.selectedUser = null;
      }
    })
  }

  deleteUser() {
    this._adminsService.deleteUser(this.selectedUser._id).subscribe({
      next: (res: any) => {
        this.getAllUsers();
        this.deleteVisible = false;
        this.selectedUser = null;
      }
    })
  }

  showDialog(mode: string, user?: any) {
    this.mode = mode;
    if(mode === 'change') {
      this.selectedUser = user;
      this.changeForm.patchValue(this.selectedUser);
      this.cdr.detectChanges();
    }
    this.visible = true;
  }

  showDeleteDialog(user: any) {
    this.selectedUser = user;
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
