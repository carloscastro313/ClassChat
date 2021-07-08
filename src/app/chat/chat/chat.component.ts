import { Component, ElementRef, EventEmitter, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ChatFireService } from '../service/chat-fire.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  chat : FormGroup;
  @Input() path: string;
  user: string;
  bottom: HTMLElement;
  flag: boolean= true;
  listMsg : [];
  @ViewChild('scrollMe',{static: true}) private myScrollContainer: ElementRef;

  constructor(private FormBuilder : FormBuilder,private ChatFireService: ChatFireService, private render : Renderer2) { }

  ngOnInit() {
    this.user = localStorage.getItem('correo');
    this.chat = this.FormBuilder.group({
      msg: ['',[Validators.required,Validators.minLength(1),Validators.maxLength(21)]]
    });

    this.ChatFireService.getMsg(this.path).subscribe((aux : any) => {
      this.listMsg = aux;
      if(this.flag){
        setTimeout(() => {
          this.scrollToBottom();
        }, 250);
        this.flag = false;
      }
    });


  }


  send(){
    if(this.chat.valid){
      this.ChatFireService.sengMsg(this.path,this.chat.get('msg').value,this.user);
      this.chat.reset();
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
      try {
        this.myScrollContainer.nativeElement.scroll({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          left: 0,
        });
      } catch(err) {
        console.log(err);
      }
  }

  trackByCreated(i, msg){
    return msg.timeSend
  }
}
