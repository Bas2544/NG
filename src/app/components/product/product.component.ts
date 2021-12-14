import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];

  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.products = this.service.getProduct();

    

  }
}
