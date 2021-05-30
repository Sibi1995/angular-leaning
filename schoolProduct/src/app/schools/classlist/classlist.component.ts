import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  constructor( public dialog:MatDialog ) { }

  schooll_data:any = [
    { "name": 'Goverment School', "location":'Chengam'},
    { "name": 'Private School', "location":'Chengam'},
    { "name": 'PBS', "location":'Chengam'}

  ]

  ngOnInit(): void {
  }

  openForm(){
    this.dialog.open(DialogComponent, 
      { width:'800px', height: '400px',})
    
  }

}



