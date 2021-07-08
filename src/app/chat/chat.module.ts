import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ListMsgComponent } from './list-msg/list-msg.component';
import { MsgComponent } from './msg/msg.component';
import { TextMsgComponent } from './text-msg/text-msg.component';
import { ChatFireService } from './service/chat-fire.service';



@NgModule({
  exports: [
    ChatComponent,
    ListMsgComponent,
    MsgComponent,
    IonicModule,
    TextMsgComponent
  ],
  declarations: [ChatComponent,ListMsgComponent,MsgComponent,TextMsgComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  providers: [
    ChatFireService,
    DatePipe
  ]

})
export class ChatModule { }
