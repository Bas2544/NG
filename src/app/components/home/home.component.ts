import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products : Product[];

  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.products = this.service.getProduct();
  }

}
