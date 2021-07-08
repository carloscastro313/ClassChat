import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassBPageRoutingModule } from './class-b-routing.module';

import { ClassBPage } from './class-b.page';
import { ChatModule } from '../chat/chat.module';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassBPageRoutingModule,
    ChatModule,
    UtilityModule
  ],
  declarations: [ClassBPage]
})
export class ClassBPageModule {}
