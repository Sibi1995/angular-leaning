import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionDepartmentComponent } from './action-department/action-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'departmentList' },
  { path: 'departmentList', component: DepartmentListComponent },
  { path: 'addDepartment', component: ActionDepartmentComponent },
  { path: '**', redirectTo: 'departmentList' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
