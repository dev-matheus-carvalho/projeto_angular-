import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent{

  produto: Product = {
    name: '',
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router) {}


  createProduct():void {
    this.productService.create(this.produto).subscribe(() => {
      this.productService.showMensage('Produto criado com sucesso');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
