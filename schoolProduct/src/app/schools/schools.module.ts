import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassActionComponent } from './class-action/class-action.component';


@NgModule({
  declarations: [
    ClasslistComponent,
    ClassActionComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ]
})
export class SchoolsModule { }
