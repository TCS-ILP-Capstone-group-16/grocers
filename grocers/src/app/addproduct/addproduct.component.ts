import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addProductRef = new FormGroup({
    productName: new FormControl(),
    productLine: new FormControl(),
    productDescription: new FormControl(),
    productImage: new FormControl(),
    quantityInStock: new FormControl(),
    price: new FormControl(),
    ProductVendor: new FormControl(),


  })



  constructor(public productSer: ProductService) { }

  msg?: string;
  ngOnInit(): void {
  }

  addProduct() {
    let addprod = this.addProductRef.value;
    this.productSer.adminAddProduct(addprod).
      subscribe(result => this.msg = result, error => console.log(error));
    this.addProductRef.reset();
  }



}
