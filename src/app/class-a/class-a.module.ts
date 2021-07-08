import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassAPageRoutingModule } from './class-a-routing.module';

import { ClassAPage } from './class-a.page';
import { ChatModule } from '../chat/chat.module';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassAPageRoutingModule,
    ChatModule,
    UtilityModule
  ],
  declarations: [ClassAPage]
})
export class ClassAPageModule {}
