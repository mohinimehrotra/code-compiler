import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopComponent } from '../pop/pop.component';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  formData: any = { name: '', email: '' };
  formDataArray: any[] = [];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void{
// this.formDataArray=[];

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopComponent, {
      width: '300px',
      //passing formdataarray to child
      data: this.formDataArray,
    });
    //get data from child(pop)
    // dialogRef.formDataArrayUpdated();
    // (updatedData:any[])=>{
    //   console.log(updatedData);
    //   this.formDataArray=updatedData;

    // });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  submitForm(): void {

    this.formDataArray.push({ ...this.formData });
    console.log(this.formDataArray);
    this.formData = { name: '', email: '' };

  }
}
