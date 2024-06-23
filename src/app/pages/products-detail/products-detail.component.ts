import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { IProducts } from '../../models/product.models';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit {

  loading:boolean= true;
  public product?:IProducts;
  private _route = inject(ActivatedRoute);
  private _apiService =inject(ApiService)

  ngOnInit(): void {
   this._route.params.subscribe(params =>{
    this._apiService.getProductById(params['id']).subscribe((data: IProducts) => {
      this.product= data;
      this.loading =false;
   });

   })

  }
}


