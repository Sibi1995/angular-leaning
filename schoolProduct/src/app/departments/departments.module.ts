import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ActionDepartmentComponent } from './action-department/action-department.component';


@NgModule({
  declarations: [
    DepartmentListComponent,
    ActionDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
