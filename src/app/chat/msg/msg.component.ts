import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {

  @Input() text : string;
  @Input() from : string;
  @Input() msg: any;
  user: boolean;
  constructor(public datePipe : DatePipe) { }

  ngOnInit() {
    this.user = (localStorage.getItem('correo') == this.from);
  }

}
