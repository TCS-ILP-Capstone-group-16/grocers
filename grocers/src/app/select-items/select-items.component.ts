import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

interface Product {
  productName: String,
  productLine: String,
  productDescription: String,
  productImage: String,
  quantityInStock: Number,
  price: Number,
  ProductVendor: String,
  productDiscount:Number

}
@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  
  public products:Product[] = []

  constructor(public productServ:ProductService) { }

  ngOnInit(): void {
    this.productServ.getProducts().
    subscribe((result:Product[]) => {
      console.log(result);
      this.products = result
    }, error => console.log(error));
  }

}
