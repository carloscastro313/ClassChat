import { Component, ElementRef, Input, OnInit, Output, Renderer2, ViewChild, EventEmitter } from '@angular/core';
import { ChatFireService } from '../service/chat-fire.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-list-msg',
  templateUrl: './list-msg.component.html',
  styleUrls: ['./list-msg.component.scss'],
})
export class ListMsgComponent implements OnInit {

  @Input() path: string;
  @Input() flag: boolean = false;
  bottom: HTMLElement;
  listMsg : [];
  @ViewChild('scrollMe',{static: true}) private myScrollContainer: ElementRef;

  constructor(private fc : ChatFireService, private render : Renderer2 ) {

   }

  ngOnInit(): void {
    this.fc.getMsg(this.path).subscribe((aux : any) => {
      this.listMsg = aux;
    });

    this.scrollToBottom();

  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if(this.flag){
      this.scrollToBottom();
      this.flag = false;
    }
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scroll({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          left: 0,
        });
      } catch(err) {
        console.log(err);
      }
    }, 1000);
  }

  trackByCreated(i, msg){
    return msg.timeSend
  }

}
