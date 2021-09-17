import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminproductService } from '../adminproduct.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  updateProductRef = new FormGroup({
    _id: new FormControl(null, Validators.required),
    quantityInStock: new FormControl(),
    price: new FormControl(),
    productDiscount: new FormControl(),
  })

  //discount is from 0-1 1 = 100

  constructor(public adminproductSer: AdminproductService) { }

  msg?: string;
  ngOnInit(): void {
  }

  adminUpdateProduct() {
    let product = this.updateProductRef.value;
    this.adminproductSer.adminupdateProduct(product._id, product).
      subscribe(result => this.msg = result, error => console.log(error));
    this.updateProductRef.reset();
  }



}