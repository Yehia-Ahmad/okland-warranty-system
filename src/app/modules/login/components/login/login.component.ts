import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonModule } from 'primeng/button';
import { InvoiceCard } from "../../../assets/invoice-card/invoice-card";
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { DiskService } from '../../../../shared/services/disk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, AngularSvgIconModule, ButtonModule, InvoiceCard, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _authService: Auth, private _diskService: DiskService, private _router: Router) {
    this.initializeLoginForm();
  }

  initializeLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let payload = this.loginForm.value;
    this._authService.login(payload).subscribe({
      next: (res: any) => {
        console.log(res);
        this._diskService.accessToken = res.data.token;
        this._diskService.user = res.data.user;
        this._router.navigate(['home']);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
