import { ChangeDetectorRef, Component } from '@angular/core';
import { SideNavComponent } from "../../../layout/components/side-nav/side-nav.component";
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CateoryService } from '../../services/cateory.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { WarnComponent } from "../../../assets/warn/warn.component";

@Component({
  selector: 'app-product-edit',
  imports: [CommonModule, FormsModule, DialogModule, ButtonModule, SideNavComponent, WarnComponent],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.scss'
})
export class ProductEditComponent {
  productId: any;
  product: any = {};
  watt: any;
  lumen: any;
  description: any;
  loading: boolean = false;
  deleteVisible: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private _router: Router, private _cateoryService: CateoryService, private _activatedRoute: ActivatedRoute, private location: Location) {
    this.productId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    setTimeout(() => {
      this.getProductById();
    }, 100)
  }

  getProductById() {
    this.loading = true;
    this._cateoryService.getProductById(this.productId).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.product = res.data;
        this.cdr.detectChanges();
      }
    })
  }

  deleteProduct() {
    this.loading = true;
    this._cateoryService.deleteProduct(this.productId).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.cdr.detectChanges();
        this.location.back();
      }
    }) 
  }

  updateProduct() {
    this._cateoryService.updateProduct(this.productId, this.product).subscribe({
      next: (res: any) => {
        this.cdr.detectChanges();
        this.location.back();

      }
    })
  }


  showDeleteDialog() {
    this.deleteVisible = true;
  }

  closeDialog() {
    this.deleteVisible = false;
  }
}
