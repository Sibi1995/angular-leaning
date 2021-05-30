import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SchoolsRoutingModule } from './schools-routing.module';
import { ClasslistComponent } from './classlist/classlist.component';
import { ClassActionComponent } from './class-action/class-action.component';




@NgModule({
  declarations: [
    ClasslistComponent,
    ClassActionComponent,
    DialogComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatDialogModule
 

  ]
})
export class SchoolsModule { }
