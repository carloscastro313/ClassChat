import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatFireService } from '../service/chat-fire.service';
import { path } from '../../service/variables';

@Component({
  selector: 'app-text-msg',
  templateUrl: './text-msg.component.html',
  styleUrls: ['./text-msg.component.scss'],
})
export class TextMsgComponent implements OnInit {

  chat : FormGroup;
  @Input() path: string;
  @Output() msg : EventEmitter<any>;
  user: string;

  constructor(private FormBuilder : FormBuilder,private ChatFireService: ChatFireService) { }

  ngOnInit() {
    this.user = localStorage.getItem('correo');
    this.chat = this.FormBuilder.group({
      msg: ['',[Validators.required,Validators.minLength(1),Validators.maxLength(21)]]
    });
  }

  send(){
    if(this.chat.valid){
      this.ChatFireService.sengMsg(this.path,this.chat.get('msg').value,this.user);
      this.chat.reset();
    }
  }

  clickSend(){
    this.msg.emit();
  }
}
