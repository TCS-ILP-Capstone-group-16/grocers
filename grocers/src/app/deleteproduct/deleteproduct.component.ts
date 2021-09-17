import { Component, OnInit } from '@angular/core';
import { AdminproductService } from '../adminproduct.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  deleteProductRef = new FormGroup({
    _id: new FormControl()

  })



  constructor(public adminproductSer: AdminproductService) { }

  msg?: string;
  ngOnInit(): void {
  }

  admindeleteProduct() {
    let prodId = this.deleteProductRef.value;
    console.log(prodId._id)
    this.adminproductSer.admindeleteProduct(prodId._id).
      subscribe(result => this.msg = result, error => console.log(error));
    this.deleteProductRef.reset();

  }

}
