import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { ComponentModule } from "../../components/component.module";

@NgModule({
    declarations: [ChatPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChatPageRoutingModule,
        ComponentModule
    ]
})
export class ChatPageModule {}
