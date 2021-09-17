import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
///creating this for type decription doesnt exist error 
interface Request {
  _id: string,
  employeeID: number,
  productId: string,
  description: string

}
@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrls: ['./viewrequest.component.css']
})

export class ViewrequestComponent implements OnInit {


  public requests: Request[] = []
  constructor(public requestSer: RequestService) { }

  ngOnInit(): void {



    this.requestSer.getRequest().
      subscribe((result: Request[]) => {
        console.log(result);
        this.requests = result
      }, error => console.log(error));




  }





}
