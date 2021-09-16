import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminproductService } from '../adminproduct.service';

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
    productVendor: new FormControl(),


  })



  constructor(public adminproductSer: AdminproductService) { }

  msg?: string;
  ngOnInit(): void {
  }

  addProduct() {
    let addprod = this.addProductRef.value;
    this.adminproductSer.adminAddProduct(addprod).
      subscribe(result => this.msg = result, error => console.log(error));
    this.addProductRef.reset();
  }



}
