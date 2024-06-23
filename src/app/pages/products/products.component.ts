import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProducts } from '../../models/product.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productLista:IProducts[]=[]
  private _apiService = inject(ApiService);
  private _router = inject(Router);

  ngOnInit(): void {
    this._apiService.getProduct().subscribe((data:IProducts[])=>{
      console.log(data)
      this.productLista = data;
    }
    );
  }
   navegate(id:number):void{
     this._router.navigate(['/products',id]);
   }
}
