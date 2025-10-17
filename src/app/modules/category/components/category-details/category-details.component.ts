import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CateoryService } from '../../services/cateory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SideNav } from "../../../layout/components/side-nav/side-nav";
import { DialogModule } from "primeng/dialog";
import { FileUpload, UploadEvent } from 'primeng/fileupload';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Select } from "primeng/select";
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-category-details',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DialogModule, ButtonModule, SideNav, Select],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent {
  private baseUrl = environment.api_base_url2;
  categoryId: number;
  categoryDetails: any;
  visible: boolean = false;
  categories: any[] = [];
  addProductForm: FormGroup;
  products: any[] = [];
  selectedProduct: any;
  imagePreview: string | ArrayBuffer | null = null;
  model: string;
  quantity: number;
  showAddModelDialog: boolean = false;
  showModelQrCodesDialog: boolean = false;
  qrCodes: any[] = [];

  constructor(private _cateoryService: CateoryService, private _activatedRoute: ActivatedRoute, private fb: FormBuilder, private cdr: ChangeDetectorRef,private _router: Router) {
    this.categoryId = this._activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.initlizeAddProduct();
    setTimeout(() => {
      this.getCategoryDetails();
      this.getAllCategories();
      this.getProducts();
    }, 100)
  }

  initlizeAddProduct() {
    this.addProductForm = this.fb.group({
      name: [''],
      watt: [''],
      lumen: [''],
      description: [''],
      category: [''],
      image: ['']
    })
  }

  getAllCategories() {
    this._cateoryService.getCategories().subscribe({
      next: (res: any) => {
        this.categories = res.data;
      }
    })
  }

  getProducts() {
    let params = {
      category_id: this.categoryId
    }
    this._cateoryService.getProducts(params).subscribe({
      next: (res: any) => {
        this.products = res.data;
        this.cdr.detectChanges();
      }
    })
  }

  showDialog() {
    this.visible = true;
  }

  hideDialog() {
    this.visible = false;
    this.showAddModelDialog = false;
    this.showModelQrCodesDialog = false;
  }

  showAddModelDialogHandler() {
    this.showAddModelDialog = true;
  }

  showModelQrCodesHandler() {
    this.showModelQrCodesDialog = true;
  }

  getCategoryDetails() {
    this._cateoryService.getCategoryById(this.categoryId).subscribe({
      next: (res: any) => {
        this.categoryDetails = res.data;
        this.cdr.detectChanges();
      }
    })
  }

  addNewProduct() {
    let formData = new FormData();
    formData.append('name', this.addProductForm.value.name);
    formData.append('watt', this.addProductForm.value.watt);
    formData.append('lumen', this.addProductForm.value.lumen);
    formData.append('description', this.addProductForm.value.description);
    formData.append('category', this.addProductForm.value.category);
    formData.append('image', this.addProductForm.value.image);
    this._cateoryService.addNewProduct(formData).subscribe({
      next: (res: any) => {
        console.log(res);
        this.hideDialog();
        this.getProducts();
      }
    })
  }

  navigateToProductDetails(product) {
    this._router.navigate(['/products/edit', product._id]);
  }
  
  onBasicUploadAuto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;

        // Store it in your component variable
        this.imagePreview = base64String;

        // Optional: patch it into your form as well
        this.addProductForm.patchValue({ image: base64String });
        this.addProductForm.get('image')!.updateValueAndValidity();

        console.log('Base64:', base64String);
      };

      reader.readAsDataURL(file);
    }
  }
}
