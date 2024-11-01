import { Component, inject, OnInit } from '@angular/core';
import { ProductInfo } from '../../../shared/interfaces/product-info';
import { ProductService } from '../../../shared/services/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  _ProductService = inject(ProductService);
  ProductList: ProductInfo[] = []
  inWishlist = false
  ngOnInit(): void {
    this.getAllProcuctsData();
  }
  getAllProcuctsData() {
    this._ProductService.getAllProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.ProductList = res
      }
    })
  }
  FLOOR(num: number) {
    return Math.round(num)
  }
}
