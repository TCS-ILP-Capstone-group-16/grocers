import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-raiseticket',
  templateUrl: './raiseticket.component.html',
  styleUrls: ['./raiseticket.component.css']
})
export class RaiseticketComponent implements OnInit {

    addTicketRef = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    ticket: new FormControl()
  });

  constructor(public raiseticketSer: TicketService) { }

  msg?: string;
  ngOnInit(): void {
  }

  addTicket() {
    let addprod = this.addTicketRef.value;
    this.raiseticketSer.addTicket(addprod).
      subscribe(result => this.msg = result, error => console.log(error));
    this.addTicketRef.reset();
  }
 
}


