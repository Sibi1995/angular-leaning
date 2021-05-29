import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassActionComponent } from './class-action/class-action.component';
import { ClasslistComponent } from './classlist/classlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'classList' },
  { path: 'classList', component: ClasslistComponent },
  { path: 'addClass', component: ClassActionComponent },
  { path: '**', redirectTo: 'classList' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolsRoutingModule { }
