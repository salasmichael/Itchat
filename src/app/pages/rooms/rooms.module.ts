import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomsPageRoutingModule } from './rooms-routing.module';

import { RoomsPage } from './rooms.page';
import { ComponentModule } from "../../components/component.module";

@NgModule({
    declarations: [RoomsPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RoomsPageRoutingModule,
        ComponentModule
    ]
})
export class RoomsPageModule {}
