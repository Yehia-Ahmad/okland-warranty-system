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
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-category-details',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DialogModule, ButtonModule, QRCodeComponent, SideNav, Select],
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
  qrCodes: any[] = [
    {
      "code": "4b88dc838a1b63f76f3d46c4b82c8b6a",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8c9",
      "createdAt": "2025-10-17T15:12:01.802Z"
    },
    {
      "code": "aae93a10d0d7a2048de33a94437f21b2",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ca",
      "createdAt": "2025-10-17T15:12:01.802Z"
    },
    {
      "code": "1497215838442a282fe750ba6e85bc4f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8cb",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "7b5dcb58c8c5b150500512a8a1b4048e",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8cc",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "95d42c7ba08fb8a3f82ec82c23c998c9",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8cd",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "9b3c58034ffd4d504ac3db7ee945f049",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ce",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "dae3d203e86d78231d44296647d459e4",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8cf",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "c624a3326f9b8a5bc772339d4af2466a",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d0",
      "createdAt": "2025-10-17T15:12:01.803Z"
    },
    {
      "code": "8d36a4e95e486bd734845f237b6a8d4e",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d1",
      "createdAt": "2025-10-17T15:12:01.804Z"
    },
    {
      "code": "5fce3d4bb0c5f43fb3997dce55d32e6e",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d2",
      "createdAt": "2025-10-17T15:12:01.804Z"
    },
    {
      "code": "55640aac443a92dbbdc2e477bedd50fb",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d3",
      "createdAt": "2025-10-17T15:12:01.804Z"
    },
    {
      "code": "c3d241fef9fb7ffe11825267e22d6e40",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d4",
      "createdAt": "2025-10-17T15:12:01.804Z"
    },
    {
      "code": "9a9387887610949e89696f7692ae2039",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d5",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "5ff4072eb46a9765bd812834ae6a2298",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d6",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "6a5c92799fe72fdce089b1b8f5459202",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d7",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "a75716b849278ec30fa6b9773b56ab43",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d8",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "b4505cd17bb9fa3d8413b36d97103320",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8d9",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "318aa598a2a0295f5e4e6a87086f66a5",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8da",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "b22c7940fc50c37d8afb1810ab7476eb",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8db",
      "createdAt": "2025-10-17T15:12:01.805Z"
    },
    {
      "code": "3dbbf97c0283a1e07fac402dd1ef6670",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8dc",
      "createdAt": "2025-10-17T15:12:01.806Z"
    },
    {
      "code": "7ea2b838a4929e6ceac68069e3ed65c0",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8dd",
      "createdAt": "2025-10-17T15:12:01.806Z"
    },
    {
      "code": "eaa23c4bb85c5c8dbaa8e6cab71e5bdd",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8de",
      "createdAt": "2025-10-17T15:12:01.807Z"
    },
    {
      "code": "242a52ff3e1caf3a4daf4cd5a9e2ef75",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8df",
      "createdAt": "2025-10-17T15:12:01.807Z"
    },
    {
      "code": "a0e84a4fc354e472066446797297d8f6",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e0",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "49d6a4e373714e1aecbff380ca914677",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e1",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "42a7491cbd2a71b691a4fec77a95d30f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e2",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "55a99d0d54c9f725f25804bb1c2bcf30",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e3",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "554cd9af198674cbdc1b22f4ec264fb1",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e4",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "1ecee4891077678c7b0f72af29bbb88b",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e5",
      "createdAt": "2025-10-17T15:12:01.808Z"
    },
    {
      "code": "12495669fd16088ccc881733bb642a38",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e6",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "970ac31aed0e7d330a2eb2474053fc70",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e7",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "ec095000f970591dfacafc08b63b9346",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e8",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "ad380d07e0d74c1f1463e4efe68133a9",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8e9",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "65715127500e9616a41f7c039e65c6a8",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ea",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "1c35025a7d13cbcd7a6877cece50e3f9",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8eb",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "85c6f354033ffcacaeb16de49c29cf3d",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ec",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "1e673f9b0dc3e2ef99c7b054eb3aada6",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ed",
      "createdAt": "2025-10-17T15:12:01.809Z"
    },
    {
      "code": "73d7ee97ec81347431e06cd25a198b80",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ee",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "1733dcb6abfe1130038b80c201851c49",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ef",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "ac9451991f5dcfb0fc060e2c7d108247",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f0",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "0280d433bba1cec58752374ad36e280a",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f1",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "aaa94c84c8cc55ea71a1724653419ed3",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f2",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "bf4441cdd97a7fa78126d1dafaea18e5",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f3",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "9750daa9fa74c32a5cd033e5f6ea877f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f4",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "b7c6eda078c1940139b068ee110b4115",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f5",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "7ca6196df36704cb65fc2c2af924c7a3",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f6",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "5bac93ebbaae6ace3ca5464ca0247588",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f7",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "c34db240ff135b43667ef491357ac6c0",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f8",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "27635dc533dace06af4dbc7c25d0eb2b",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8f9",
      "createdAt": "2025-10-17T15:12:01.810Z"
    },
    {
      "code": "35c7aac009f48cd39631b126e3c93ddd",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8fa",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "203e81d8776073f94f340538f18dad2f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8fb",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "5ec05156b060fff276f08f50c457e4ca",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8fc",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "3edcaca2463a577bf1b7f8e033f9508c",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8fd",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "de7cd4e91b67a4f021523dd18eedc5fc",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8fe",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "0303ed6dcdfc72ed17328dc253a1ade6",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b8ff",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "986a87a445cb3b0c19236da2d145f8dc",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b900",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "93851f6e0ec64727a35fcccd1120db26",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b901",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "2fb77a79904053bd3fcd19c40efef1e0",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b902",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "b50aafea360f3bd5b18c4855c14bb47b",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b903",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "746faa262f2ce578157a080f6837d720",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b904",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "8ad9e238211311aae979d1b9413ec561",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b905",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "78307a30b4dfc7088458b79f0e79aa95",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b906",
      "createdAt": "2025-10-17T15:12:01.811Z"
    },
    {
      "code": "68884fdd9f0e077ed7a0c7bb36f2fe71",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b907",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "53ac4c612ccc0c34d5d5c5c19560864f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b908",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "d9830d7d5f46086c5612ea328d725aab",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b909",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "02481038a8ed65e8124ec1ae6cb6b815",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90a",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "6b5fc0b0013c2808d3cdce6802abcd6b",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90b",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "d1d160032fcd8cb59ad892514ed666d9",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90c",
      "createdAt": "2025-10-17T15:12:01.812Z"
    },
    {
      "code": "3da1c3d910dc26c4e3e47b859bc35338",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90d",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "8b4fc046578c387ff1b907a40a680459",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90e",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "cb1e898d055c6c43e1af72040198bd97",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b90f",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "a4d98e90e585e906c10bf502a8c9700a",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b910",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "11a755ec54475f22ac613e93641f0f29",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b911",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "515d999ef3267cbd581f05685ea3374e",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b912",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "5796140cf6fbf4a86869008ca2efc2d2",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b913",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "ec08ddbead1438049b6161770a599a78",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b914",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "bb44a7221750c92ce7bf806bce6804fb",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b915",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "4d3e35bb2381dd4aa3a2ecb9d7cc9693",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b916",
      "createdAt": "2025-10-17T15:12:01.813Z"
    },
    {
      "code": "d7481396378004f0d83ae40d3e6666dc",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b917",
      "createdAt": "2025-10-17T15:12:01.814Z"
    },
    {
      "code": "5adf2f74bf10bd523f43950d0513681f",
      "isActive": true,
      "warrantyDuration": 365,
      "_id": "68f25cc17c3af2241769b918",
      "createdAt": "2025-10-17T15:12:01.814Z"
    }
  ];
  codes: string[] = [];
  selectedProduct: any;
  imagePreview: string | ArrayBuffer | null = null;
  name: string;
  quantity: number;
  showAddModelDialog: boolean = false;
  showModelQrCodesDialog: boolean = false;

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
        this.hideDialog();
        this.getProducts();
      }
    })
  }

  createModel(){
    let payload = {
      name: this.name,
      product: this.selectedProduct._id,
      quantity: this.quantity
    };

    this._cateoryService.createModel(payload).subscribe({
      next: (res: any) => {
        this.hideDialog();
        let payload = {
          quantity: this.quantity
        }
        this.crearteQrCodes(res.data._id, payload);
      }
    })
  }

  crearteQrCodes(model_id, payload){
    this._cateoryService.createQRCode(model_id, payload).subscribe({
      next: (res: any) => {
        this.hideDialog();
        this.showModelQrCodesHandler();
        this.getProducts();
        this.qrCodes = res.data;
        this.qrCodes.forEach(qrCode => {
          this.veryQrCode(qrCode.code);
          this.codes.push(qrCode.code);
        })
      }
    })
  }

  veryQrCode(qrCode) {
    this._cateoryService.veryQrCode(qrCode).subscribe({
      next: (res: any) => {
      }
    })
  }

  printQrCodes() {
    this._cateoryService.printQrCodes(this.codes).subscribe({
      next: (res: any) => {
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
      };

      reader.readAsDataURL(file);
    }
  }
}
